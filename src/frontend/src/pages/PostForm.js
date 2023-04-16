import { Formik, Form, Field, ErrorMessage } from "formik";
import { usePostContext } from "../context/PostContext";
import { useNavigate, Link } from "react-router-dom";
import * as yp from "yup";

export function PostForm() {

    const {createPost} = usePostContext();
    const navigate = useNavigate();

    return (
        <Formik
            initialValues={{title: "", content: "", image: ""}}
            validationSchema={yp.object({
                title: yp.string().required('Title required'),
                content: yp.string().required('Content required')
            })}
            onSubmit={async (values, actions) => {
                await createPost(values);
                navigate('/');
            }}>
            {({handleSubmit}) => (
                <Form className="flex flex-col justify-center items-center">
                    <Field className="my-2 p-2 focus:outline-none w-1/2" name="title" placeholder="Title" autoFocus={true}/>
                    <ErrorMessage component={"p"} className="text-red-300 text-sm" name="title" />
                    <Field className="my-2 p-2 focus:outline-none w-1/2" name="content" placeholder="Content"/>
                    <ErrorMessage component={"p"} className="text-red-300 text-sm" name="content" />
                    <button type="submit" className="bg-black text-cyan-400 hover:bg-cyan-400 hover:text-black">Save</button>
                    <Link to='/' className="bg-black text-red-500 hover:bg-red-400 hover:text-black">Cancel</Link>
                </Form>
            )}
        </Formik>
    );
};