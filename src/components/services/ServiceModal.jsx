import './services.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

export const ServiceModal = ({ title, toggleTabClose, showModal,description,point1,point2, point3, point4  }) => {

  return (
    <>
      {showModal &&


        <Modal
          open={showModal}
          onClose={toggleTabClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="services_modal-content" >

            <i className="uil uil-times services_modal-close" onClick={() => toggleTabClose(0)}></i>

            <h3 className="services_modal-title">{title}</h3>
            <p className="services_modal-description">
            {description}
            </p>

            <ul className="services_modal-services grid">
              <li className="services_modal-service">
                <i className="uil uil-check-circle services_modal-icon"></i>
                <p className="services_modal-info">
                 {point1}
                </p>
              </li>
              <li className="services_modal-service">
                <i className="uil uil-check-circle services_modal-icon"></i>
                <p className="services_modal-info">
                {point2}
                </p>
              </li>
              <li className="services_modal-service">
                <i className="uil uil-check-circle services_modal-icon"></i>
                <p className="services_modal-info">
                {point3}
                </p>
              </li>
              <li className="services_modal-service">
                <i className="uil uil-check-circle services_modal-icon"></i>
                <p className="services_modal-info">
                {point4}
                </p>
              </li>
            </ul>

          </Box>
        </Modal>

        //    <div className="services_modal active-modal">
        //    <div className="services_modal-content">
        //      <i className="uil uil-times services_modal-close" onClick={()=> toggleTabClose(0)}></i>

        //      <h3 className="services_modal-title">{title}</h3>
        //      <p className="services_modal-description">
        //        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos quasi nostrum alias aspernatur veniam rem et esse distinctio amet saepe, 
        //      </p>

        //      <ul className="services_modal-services grid">
        //        <li className="services_modal-service">
        //          <i className="uil uil-check-circle services_modal-icon"></i>
        //          <p className="services_modal-info">
        //            Design The user Interface
        //          </p>
        //        </li>
        //        <li className="services_modal-service">
        //          <i className="uil uil-check-circle services_modal-icon"></i>
        //          <p className="services_modal-info">
        //            Design The user Interface
        //          </p>
        //        </li>
        //        <li className="services_modal-service">
        //          <i className="uil uil-check-circle services_modal-icon"></i>
        //          <p className="services_modal-info">
        //            Design The user Interface
        //          </p>
        //        </li>
        //        <li className="services_modal-service">
        //          <i className="uil uil-check-circle services_modal-icon"></i>
        //          <p className="services_modal-info">
        //            Design The user Interface
        //          </p>
        //        </li>
        //      </ul>
        //    </div>
        //  </div>

      }

    </>
  )
}
