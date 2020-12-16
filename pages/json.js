import React, { useState, useCallback} from 'react'
import Form from "react-jsonschema-form";

  const schema = {
    title: "Todo",
    type: "object",
    required: ["title"],
    properties: {
      title: {type: "string", title: "Title"},
      done: {type: "boolean", title: "Done?"},
    }
  };
  

export default function JsonForm() {
    // const [dataForm, setDataForm] = useState({});
    let dataForm;
    // const handleAddData = useCallback((values) => {
    //     console.log(values.formData)
    //     // setDataForm(values.formData)
    // },[])

    // const handleApi = useCallback(() => {
    //     // console.log(dataForm);
    //     setDataForm({});
    // },[]);
    return ( 
    <Form schema={schema} 
    onChange={(values) => dataForm = values.formData} 
    onBlur={() => console.log(dataForm)}  
    />
    )
}

