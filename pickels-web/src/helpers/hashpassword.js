import bcrypt from 'bcryptjs';

export const HashPassword=async(password)=>{
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds)
      .then((hashedPassword) => {
        // Now you can send the hashedPassword to the server
        return hashedPassword
      })
      .catch((error) => {
        console.error('Error hashing password:', error);
      });
        //setError('loginn');
      };

