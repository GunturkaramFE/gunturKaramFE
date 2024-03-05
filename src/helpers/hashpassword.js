
      import bcrypt from 'bcryptjs';

      export const HashPassword = async (password) => {
          const saltRounds = 10;
          try {
              const hashedPassword = await bcrypt.hash(password, saltRounds);
              // Now you can send the hashedPassword to the server
              return hashedPassword;
          } catch (error) {
              console.error('Error hashing password:', error);
              // Handle error as needed
          }
      };
      