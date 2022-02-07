import Modal from "react-modal";
// import './styles.css';
import {useState} from 'react';
import axios from "axios";

const UploadModal = () =>{
    const [filename,setFileName]=useState()
    const [caption,setCaption] = useState()

    const selectedfile =(event) => {
        setFileName(event.target.files[0])
    }
    const photocaption = (e) => {
        setCaption(e.target.value)
    }

    const handleSubmit = () => {
        const data = {
            caption, 
            image_upload: filename
        }

        const formData = new FormData()

        formData.append(data.caption)
        formData.append(data.image_upload)

        axios.post('https://asiko-app.herokuapp.com/createpost',formData).then(res => {console.log(res)}).catch(error => {
            console.log(error);
          });;
    }

    return (
        <Modal
            isOpen ={true}
            closeTimeoutMS={200}
            // onRequestClose={props.closeModal}
            className="modal"
            >
            <h3 className="modal__header">Upload Picture </h3>
            <form className="modal__body" onSubmit={handleSubmit}>
              <input type='file' onChange={selectedfile}/>
              <input type='text' placeholder='Add a caption' name='caption' onChange={photocaption}/>
              <button type='submit'>Post</button>
            </form>
        </Modal>
    )
}

export default UploadModal