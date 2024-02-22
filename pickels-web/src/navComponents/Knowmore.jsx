import React from 'react';
import { Container, Typography, Grid, Avatar, Card, CardContent, Divider } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import '../styles/Knowmore.css';

const Knowmore = () => {
  return (
    <>
    <Container maxWidth="md" style={{ marginTop: '40px' }}>
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center', marginBottom: '30px' }}>
        About Us
      </Typography>
      <Grid item xs={12}>
          <Typography variant="body1" color="textSecondary" style={{ textAlign: 'center' }}>
            Gunturkaram from Telugu States is your ultimate destination for authentic and delicious spicy Pickles. We
            specialize in offering a wide range of mouthwatering karams (spicy Pickles) that are sure to tantalize your
            taste buds. Our products are made with love and the finest ingredients, ensuring unmatched quality and
            flavor. Whether you're a spice enthusiast or just looking to add some heat to your snacks, Gunturkaram has
            something for everyone. Explore our collection today and experience the true essence of Andhra's culinary
            delights.
          </Typography>
        </Grid>   
        <Divider> <StarOutlineIcon style={{width:"18px",height:'18px',color:'grey'}} />   <StarOutlineIcon style={{color:'grey'}} />  <StarOutlineIcon style={{width:"18px",height:'18px',color:'grey'}} />      </Divider>
    </Container>  
    <Grid  lg={12} md={12} sm={12} xs={12} sx={{display:"flex",justifyContent:'center',alignItems:'center',flexDirection:'column'}} >
     <Grid lg={10} md={10} sm={10} xs={10} container justifyContent="flex-end">
      <Grid container lg={7.9} sm={7.9} xs={12} md={7.9}  spacing={4} sx={{ marginTop: '2px' }} item>
        <Grid item xs={12} md={6} lg={6}  className="animated-image">
          <img style={{ borderRadius: '10px' }} src='https://twobrothersindiashop.com/cdn/shop/articles/p.png?v=1694785769' alt='$/' />
        </Grid>
        <Grid item xs={12} md={8} lg={6} className="animated-card">
          <Card style={{ height: '100%', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <CardContent style={{ padding: '20px' }}>
              <Typography variant="h6" component="h2" gutterBottom style={{ color: '#333' }}>
              A Taste of Home
              </Typography>
              <Typography variant="body1" color="textSecondary">
              GunturKaram non-vegetarian pickles. where each jar tells a tale of tradition, spice, taste buds of every Telugu connoisseur.Savor the artistry of Telugu cuisine with our non-vegetarian pickle collection, where every jar is a masterpiece of flavor, crafted with love and tradition passed down through generations Its from  Andhra Pradesh and Telangana,
              </Typography>
             <WestIcon style={{color:"#DADEDF",marginTop:'10px'}}/>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
     </Grid>
     <Grid lg={10} md={10} sm={10} xs={10} container justifyContent="flex-start">
      <Grid container lg={7.9} sm={7.9} xs={12} md={7.9}  spacing={4} sx={{ marginTop: '2px' }} item >
      <Grid item xs={12} md={6} className="animated-card">
          <Card style={{ height: '100%', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <CardContent style={{ padding: '20px' }}>
              <Typography variant="h6" component="h2" gutterBottom style={{ color: '#333' }}>
              From Farm to Jar
              </Typography>
              <Typography variant="body1" color="textSecondary">
              where pickle-making is a cherished ritual which will delivered from rajamundry andhrpradesh steeped in history and culinary prowess. Whether enjoyed as a side dish or a main attraction, our pickles promise to ignite your senses and leave an indelible mark on your culinary journey, celebrating the rich tapestry of Telugu flavors in every savory bite.
              </Typography>
              <Grid lg={12} md={12} sx={{display:"flex",justifyContent:'end'}}>
              <EastIcon style={{color:"#DADEDF",marginTop:'10px'}}/> 
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}  className="animated-image2">
          <img style={{ borderRadius: '10px' }} src='https://twobrothersindiashop.com/cdn/shop/articles/p.png?v=1694785769' alt='$/' />
        </Grid>
       
      </Grid>
     </Grid>
    </Grid>

  <Grid lg={12} md={12} sm={12} xs={12} sx={{marginTop:"20px",display:"flex",flexDirection:{xs:'column',sm:'column',md:'row',lg:'row'}}}>
  
  <Grid xs={12} md={6} lg={6} sm={11} sx={{ width: {xs:"100",sm:"100%",md:"50%",lg:"50%"}, display: "flex", justifyContent: 'center', alignItems: 'center'}}>
  <Grid container sx={{width:{xs:'80%',sm:"65%",md:"65%",lg:'65%'},display:'flex',flexDirection:'column'}}>
    <Grid item sx={{ width: '100%',margin:"10px 0px",marginTop:"30px" }}>
      <Typography variant="h3" sx={{fontWeight:"bold"}}> " Best Pickles From Our GunturKaram "</Typography>
    </Grid>
    <Grid item sx={{ width: '100%',margin:"10px 0px" }}>
      <Typography sx={{ fontSize: "20px" }}>"Pickle, where flavors dance and tanginess sings."</Typography>
    </Grid>
    <Grid item sx={{ width: '100%',margin:"10px 0px" }}>
      <Typography sx={{ fontSize: "17px",fontFamily:"Tahoma" }}>Pickle is not just a condiment; it's a journey into the heart of taste. With every bite, discover a symphony of flavors that tantalize your palate and awaken your senses. Whether you're a pickle enthusiast or a casual nibbler, let Pickle be your guide to culinary delight.</Typography>
    </Grid>
  </Grid>
</Grid>

<Grid container xs={12} md={6} lg={6} sm={12} sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column',width: {xs:"100",sm:"100%",md:"50%",lg:"50%"} }}>
  <Grid className='ImageKnowmore' sx={{ width: {xs:'50%',lg:'70%'}, height: {xs:'250px',lg:'80%',md:'80%',sm:'400px'}, display: "flex", justifyContent: "center", alignItems: "center" }}>
    <img className='ImageKnowmore' style={{ maxWidth: "100%", maxHeight: "100%" }} src='https://holycowvegan.net/wp-content/uploads/2021/07/lime-pickle-nimbu-ka-achaar.jpg' alt='pickle' />
  </Grid>
</Grid>

</Grid>
 

    <Grid container lg={12} sm={12} md={12} xs={12}  style={{ width:'100%',marginTop:"10px", backgroundColor: '#32CD32', padding: '20px'}} direction="row">
      <Grid item xs={12} md={4} lg={4} sx={{display:'flex',justifyContent:'center',alignItems:'center' }}>
        <Typography variant="body1" color='white'>Phone: +1234567890</Typography>
      </Grid>
      <Grid item xs={12} md={4} lg={4} sx={{display:'flex',justifyContent:'center',alignItems:'center' }}>
        <Typography variant="body1" color='white'>Email: example@example.com</Typography>
      </Grid>
      <Grid item xs={12} md={4} lg={4} sx={{display:'flex',justifyContent:'center',alignItems:'center' }}>
        <Typography variant="body1" color='white'>Location: Mounika Towers ,Madhapur , India</Typography>
      </Grid>
    </Grid>

    
    </>
    
  );
};

export default Knowmore;
