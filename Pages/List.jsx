// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { useFirebase } from "../Context/Firebase";
// function List() {
//     const firebase = useFirebase();
//   const [name, setName] = useState("");
//   const [isbnNumber, setIsbnNumber] = useState("");
//   const [price, setPrice] = useState("");
//   const [coverPic, setCoverPic] = useState();

//   const handelSubmit = async(e) => {
//     e.preventDefault();
//    await firebase.handeCreate(name,isbn, price,cover)
//   };
//   return (
//     <div>
//       <Form className="mt-10 ml-10 " onSubmit={handelSubmit}>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Enter Book Name</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Name"
//             onChange={(e) => setName(e.target.value)}
//             value={name}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Isbn</Form.Label>
//           <Form.Control
//             type="Text"
//             placeholder="Isbn"
//             onChange={(e) => setIsbnNumber(e.target.value)}
//             value={isbnNumber}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Price</Form.Label>
//           <Form.Control
//             type="Text"
//             placeholder="price"
//             onChange={(e) => setPrice(e.target.value)}
//             value={price}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Photo</Form.Label>
//           <Form.Control
//             type="file"
//             onChange={(e) => setCoverPic(e.target.files[0])}
//             value={coverPic}
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicCheckbox">
//           <Form.Check type="checkbox" label="Check me out" />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Create
//         </Button>
//       </Form>
//     </div>
//   );
// }

// export default List;
