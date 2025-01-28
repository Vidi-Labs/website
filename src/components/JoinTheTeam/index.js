import React, { useState } from "react";
import {
  VideoBg,
  FeatureContainer,
  FeatureH1,
  GifBg,
  FeatureH2,
  ButtonContainer,
  SquareButton,
  SquareButton2
} from "./JoinTheTeamElements";
import devicePhoto from "../../images/seekr-video.mp4";
import { useTranslation } from "react-i18next";

const JoinTheTeam = () => {

  const { t } = useTranslation();

  return (
    <FeatureContainer>
      
      <FeatureH1>{t("wantToJoin")}</FeatureH1>
      <FeatureH2>{t("contactUsText")}</FeatureH2>
      <ButtonContainer>
        <SquareButton2>Contact Us</SquareButton2>
        <SquareButton>Volunteer</SquareButton>
      </ButtonContainer>
    </FeatureContainer>
  );
};

export default JoinTheTeam;



// import React, { useState } from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;

// const FormContainer = styled.div`
//   background-color: #f0f0f0;
//   border-radius: 10px;
//   flex: 1;
//   padding: 50px;
//   max-width: 500px; /* Adjust the max-width as needed */
// `;

// const Title = styled.h1`
//   text-align: center;
//   color: #092e49;
//   margin-bottom: 20px;
// `;

// const InputField = styled.input`
//   width: 100%;
//   padding: 20px;
//   margin-bottom: 10px;
//   border-radius: 5px;
//   background-color: #d9d9d9;
//   border: none;
// `;

// const InputField2 = styled.input`
//   width: 100%;
//   padding: 10px;
//   margin-bottom: 10px;
//   border-radius: 5px;
//   background-color: #d9d9d9;
//   border: none;
//   padding-bottom: 100px;
// `;

// const CheckBoxLabel = styled.label`
//   display: flex;
//   align-items: center;
//   margin-top: 16px;
//   color: #092e49;
// `;

// const CheckBox = styled.input`
//   margin-right: 8px;
// `;

// const SubmitButton = styled.button`
//   width: 100%;
//   padding: 10px;
//   background-color: #092e49;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   margin-top:20px;
// `;

// const WaitlistForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phoneNumber: '',
//     dob: '',
//     address: '',
//     occupation: '',
//     receivePromotionalMaterial: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <Container>
//       <FormContainer>
//         <Title>Join Our Waitlist</Title>

//         <form onSubmit={handleSubmit}>
//           <InputField
//             type="text"
//             id="name"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />

//           <InputField
//             type="tel"
//             id="phoneNumber"
//             name="phoneNumber"
//             placeholder="Phone Number"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             required
//           />

//           <InputField
//             type="date"
//             id="dob"
//             name="dob"
//             placeholder="Date of Birth"
//             value={formData.dob}
//             onChange={handleChange}
//             required
//           />

//           <InputField
//             type="text"
//             id="address"
//             name="address"
//             placeholder="Address"
//             value={formData.address}
//             onChange={handleChange}
//             required
//           />

//           <InputField
//             type="text"
//             id="occupation"
//             name="occupation"
//             placeholder="Occupation"
//             value={formData.occupation}
//             onChange={handleChange}
//             required
//           />

//           <CheckBoxLabel>
//             <CheckBox
//               type="checkbox"
//               id="receivePromotionalMaterial"
//               name="receivePromotionalMaterial"
//               checked={formData.receivePromotionalMaterial}
//               onChange={handleChange}
//             />
//             I would like to receive promotional material from Seekr.
//           </CheckBoxLabel>

//           <SubmitButton type="submit">Submit</SubmitButton>
//         </form>
//       </FormContainer>
//     </Container>
//   );
// };

// export default WaitlistForm;
