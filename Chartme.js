import './Chartme.css'
import emailjs from "@emailjs/browser"
import {useRef} from 'react'
import swal from 'sweetalert';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
// import {Element} from "react-scroll";


function Chartme() {
   
  const form=useRef();

    function sendemail(e){
      e.preventDefault()
      emailjs.sendForm('service_my26syo', 'template_ifcxpka', form.current,  "12pcpVWCl9_b7cOEV")
      .then(function(result) {
        swal({
          title: "Good job!",
          text: "message sent",
          icon: "success",
          button: "ok"
        });
         console.log(result.text);
      }, function(error) {
         console.log(error.text);
      });

    }

  return (
    // <Element >
    <div id='form'>
        <form  ref={form} onSubmit={sendemail}>
        <TextField id="filled-basic" label="Filled" variant="filled" type='text' placeholder='name'  name="from_name" /><br></br>
        <TextField id="filled-basic" label="Filled" variant="filled" type="email" placeholder='email' name="to_name" />
            
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        />

</Box>



            <textarea type='text' placeholder='chartme' name="message"></textarea><br></br>
            <button type='submit'>submit</button>
        </form>
      
    </div>
    //  </Element>
  )
}

export default Chartme
