'use server'
 
export async function authenticate(_currentState: unknown, formData: FormData) {
  try {
    
    console.log("formData: ", formData);
  } 
  catch (error) {
    // if (error) {
    //   switch (error.type) {
    //     case 'CredentialsSignin':
    //       return 'Invalid credentials.'
    //     default:
    //       return 'Something went wrong.'
    //   }
    // }
    console.log("error: ", error);
    throw error
  }
}