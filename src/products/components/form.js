import React, { useState, useRef } from "react";
import { Form as BulmaForm, Button} from 'react-bulma-components'

const { Field, Control, Label, Input } = BulmaForm

const Form = ({ handleSubmit }) =>{

    const [formValues, setFormValues] = useState({
        name:'',
        priceUnitary:'',
        size:'',
        description:'',
    })

    const handleChange = (event) =>{
        const {name, value} = event.target

        setFormValues({...formValues, [name]:value})
    }
    const _handleSubmit = (e) =>{
        e.preventDefault()
        handleSubmit({...formValues})
        console.log(formValues)

    }
    return (
        <form onSubmit={_handleSubmit}>
            <Field>
                <Label>name</Label>
                <Control>
                    <Input placeholder="Text Input" name="name" value={formValues.name} onChange={handleChange} />
                </Control>
            </Field>

            <Field>
                <Label>priceUnitary</Label>
                <Control>
                    <Input placeholder="Text Input" name="priceUnitary" value={formValues.priceUnitary} onChange={handleChange} type="number"/>
                </Control>
            </Field>

            <Field>
                <Label>size</Label>
                <Control>
                    <Input placeholder="Text Input" name="size" value={formValues.size} onChange={handleChange} type="number"/>
                </Control>
            </Field>

            <Field>
                <Label>description</Label>
                <Control>
                    <Input placeholder="Text Input" name="description" value={formValues.description} onChange={handleChange}/>
                </Control>
            </Field>

            <Button type="submit">guardar</Button>

        </form>
    );
}

export default Form