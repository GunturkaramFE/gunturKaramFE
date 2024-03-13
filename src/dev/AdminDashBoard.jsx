import { useEffect, useState, useRef } from "react";
import api from "../api";
import Chart from "chart.js/auto";

const AdminDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const userChartRef = useRef(null);
  const orderChartRef = useRef(null);
  const orderStatusChartRef = useRef(null);

  const fetchUserData = async () => {
    try {
      const response = await api.get('/user/usersdata');
      setUsers(response.result);
  
      const startDate = new Date('2024-01-01T00:00:00');
      const endDate = new Date(); // Current date
      const endOfDay = new Date(endDate);
      endOfDay.setHours(23, 59, 59, 999);
  
      let obj = {
        filter: {
          startdate: startDate.toISOString(), 
                    enddate: endOfDay.toISOString()
        }
      };
  
      const allOrders = await api.post('/user/Order/sort', obj);
      setOrders(allOrders.orders);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      // Parse user registration dates and count registrations per day
      const registrationsPerDay = users.reduce((acc, user) => {
        const registrationDate = new Date(user.modifyAt).toLocaleDateString();
        acc[registrationDate] = acc[registrationDate] ? acc[registrationDate] + 1 : 1;
        return acc;
      }, {});

      // Extract dates and counts for the user registration chart
      const userDates = Object.keys(registrationsPerDay);
      const userCounts = Object.values(registrationsPerDay);

      // Destroy existing user registration chart if it exists
      if (userChartRef.current !== null) {
        userChartRef.current.destroy();
      }

      // Render new user registration chart
      const userCtx = document.getElementById('userRegistrationsChart').getContext('2d');
      userChartRef.current = new Chart(userCtx, {
        type: 'bar',
        data: {
          labels: userDates,
          datasets: [{
            label: 'New User Registrations',
            data: userCounts,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            legend: {
              display: false
            },
            title: {
              display: true,
              text: 'User Registrations'
            }
          }
        }
      });
    }
  }, [users]);

  useEffect(() => {
    if (orders.length > 0) {
      // Parse order dates and count orders per day
      const ordersPerDay = orders.reduce((acc, order) => {
        const orderDate = new Date(order.OrderDate).toLocaleDateString();
        acc[orderDate] = acc[orderDate] ? acc[orderDate] + 1 : 1;
        return acc;
      }, {});

      // Extract dates and counts for the order chart
      const orderDates = Object.keys(ordersPerDay);
      const orderCounts = Object.values(ordersPerDay);

      // Destroy existing order chart if it exists
      if (orderChartRef.current !== null) {
        orderChartRef.current.destroy();
      }

      // Render new order chart
      const orderCtx = document.getElementById('orderDatesChart').getContext('2d');
      orderChartRef.current = new Chart(orderCtx, {
        type: 'line',
        data: {
          labels: orderDates,
          datasets: [{
            label: 'Orders per day',
            data: orderCounts,
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            legend: {
              display: false
            },
            title: {
              display: true,
              text: 'Orders per Day'
            }
          }
        }
      });
    }
  }, [orders]);

  useEffect(() => {
    if (orders.length > 0) {
      // Count orders for each status
      const orderStatusCounts = orders.reduce((acc, order) => {
        acc[order.OrderStatus] = (acc[order.OrderStatus] || 0) + 1;
        return acc;
      }, {});

      const statusLabels = Object.keys(orderStatusCounts);
      const statusCounts = Object.values(orderStatusCounts);

      // Destroy existing order status chart if it exists
      if (orderStatusChartRef.current !== null) {
        orderStatusChartRef.current.destroy();
      }

      // Render new order status chart
      const orderStatusCtx = document.getElementById('orderStatusChart').getContext('2d');
      orderStatusChartRef.current = new Chart(orderStatusCtx, {
        type: 'pie',
        data: {
          labels: statusLabels,
          datasets: [{
            label: 'Order Status',
            data: statusCounts,
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)', // Red for cancelled
              'rgba(54, 162, 235, 0.6)', // Blue for placed
              'rgba(255, 206, 86, 0.6)', // Yellow for shipped
              'rgba(75, 192, 192, 0.6)', // Green for confirmed
              'rgba(153, 102, 255, 0.6)' // Purple for delivered (you can add more colors if needed)
            ],
            borderWidth: 1
          }]
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Order Status Distribution'
            }
          }
        }
      });
    }
  }, [orders]);

  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", flexWrap:"wrap" }}>
      <div style={{ width: "50%", minHeight: "40vh", height: "auto" }}>
        <canvas id="userRegistrationsChart"></canvas>
      </div>
      <div style={{ width: "50%", minHeight: "40vh", height: "auto", justifyContent:"space-around" ,alignItems:"center"}}>
        <canvas id="orderDatesChart"></canvas>
      </div>
      <div style={{ width: "50%", minHeight: "40vh", height: "auto", justifyContent:"space-around" ,alignItems:"center"}}>
        <canvas id="orderStatusChart"></canvas>
      </div>
    </div>
  );
};

export default AdminDashboard;
