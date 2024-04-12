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
                <Label>nombre_funcionario</Label>
                <Control>
                    <Input placeholder="Text Input" name="nombre_funcionario" value={formValues.nombre_funcionario} onChange={handleChange} />
                </Control>
            </Field>

            <Field>
                <Label>aparato</Label>
                <Control>
                    <Input placeholder="Text Input" name="aparato" value={formValues.aparato} onChange={handleChange}/>
                </Control>
            </Field>

            <Field>
                <Label>numero</Label>
                <Control>
                    <Input placeholder="Text Input" name="numero" value={formValues.numero} onChange={handleChange} type="number"/>
                </Control>
            </Field>

            <Field>
                <Label>lugar_donde</Label>
                <Control>
                    <Input placeholder="Text Input" name="lugar_donde" value={formValues.lugar_donde} onChange={handleChange}/>
                </Control>
            </Field>

            <Field>
                <Label>fecha_entrega</Label>
                <Control>
                    <Input placeholder="Text Input" name="fecha_entrega" value={formValues.fecha_entrega} onChange={handleChange} type="date" />
                </Control>
            </Field>

            <Button type="submit">guardar</Button>

        </form>
    );
}

export default Form