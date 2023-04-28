import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yp from "yup";
import { Button, ButtonRed, ButtonSubmit, Page, Container, ButtonGroup } from "../components/Page";
import { usePostContext } from "../context/PostContext";
import { useEffect, useState } from "react";

export function PostForm() {

    const {createPost, getPost, updatePost} = usePostContext();
    const navigate = useNavigate();
    const params = useParams();
    // modelo del formulario
    const [postModel, setPostModel] = useState({
        title: "",
        content: "",
        image: null
    })

    useEffect(() => {
      (async () => {
        if (params.id) {
            const post = await getPost(params.id);
            setPostModel(post);
        }
      })();
    }, [])
    
    
    return (
        <Formik
            initialValues={postModel}
            enableReinitialize
            validationSchema={yp.object({
                title: yp.string().required('Title required'),
                content: yp.string().required('Content required')
            })}
            onSubmit={async (values, actions) => {
                if (params.id) {
                    // TODO: cambiar este 'hack'. En su defecto, detectar los cambios
                    // del formulario y sólo enviar los campos alterados.
                    if (!(values.image instanceof File)) {
                        delete values.image;
                    }
                    await updatePost(params.id, values); 
                } else {
                    await createPost(values);
                }
                actions.setSubmitting(false);
                navigate('/');
            }}>
            {({handleSubmit, setFieldValue, isSubmitting}) => (
                <Form>
                    <Container>
                        <div className="flex flex-col w-1/2">
                            <PostFormField name="title" label="Title" placeholder="Title" />
                            <PostFormText name="content" label="Content" placeholder="Content of the post" />
                            <PostFormFile set={(evt) => setFieldValue("image", evt.target.files[0])}/>
                            <ButtonGroup>
                                <ButtonSubmit text='Save' disabled={isSubmitting}/>
                                <ButtonRed text='Cancel' href='/' />
                            </ButtonGroup>
                        </div>
                    </Container>
                </Form>
            )}
        </Formik>
    );
}

export function PostFormField({name, placeholder, label}) {
    return (
        <div>
            <label htmlFor={name} className="text-white text-sm block font-bold">{label}</label>
            <Field className="my-2 p-2 bg-neutral-700 text-white focus:outline-none w-full" name={name} placeholder={placeholder}/>
            <div className="flex justify-end">
                <ErrorMessage component={"p"} className="text-red-300 text-sm italic" name={name} />
            </div>
        </div>
    );
}

export function PostFormText({name, placeholder, label}) {
    return (
        <div>
            <label htmlFor={name} className="text-white text-sm block font-bold">{label}</label>
            <Field component={"textarea"} rows={4} className="my-2 p-2 bg-neutral-700 text-white focus:outline-none w-full" name={name} placeholder={placeholder}/>
            <div className="flex justify-end">
                <ErrorMessage component={"p"} className="text-red-300 text-sm italic" name={name} />
            </div>
        </div>
    );
}

export function PostFormFile({set}) {
    return (
        <div>
            <input type="file" name="image" className="my-2 p-2 bg-neutral-700 text-white focus:outline-none w-full"
            onChange={set}
            />
        </div>
    )
}