import { FormControl, TextField } from "@mui/material";
import { useEffect, useState } from "react";
interface Props{
  label: string;
  form_label: string;
  rows: number;
  placeholder?: string;
  setQuery: React.Dispatch<React.SetStateAction<any>>;
  query: {};
}
export default function TextInput({label, form_label, rows, placeholder, setQuery, query}:Props){
    const [value, setValue] = useState("");
    useEffect(()=>{
        setQuery({...query, [label]: value})
    }, [value])
    return (
        <FormControl sx = {{ m: 1 }} fullWidth>
            <TextField
                id="filled-multiline-static"
                label={form_label}
                multiline
                rows={rows}
                placeholder={placeholder}
                fullWidth
                variant="filled"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
        </FormControl>
    )
}
