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
        "title": "",
        "content": ""
    })

    useEffect(() => {
      // TODO: revisar que el params tenga un id, y si es así
      // traer los datos desde el backend
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
                    await updatePost(params.id, values); 
                } else {
                    await createPost(values);
                }
                navigate('/');
            }}>
            {({handleSubmit}) => (
                <Form>
                    <Container>
                        <div className="flex flex-col w-1/2">
                            <PostFormField name="title" placeholder="Title" />
                            <PostFormField name="content" placeholder="Content of the post" />
                            <ButtonGroup>
                                <ButtonSubmit text='Save' />
                                <ButtonRed text='Cancel' href='/' />
                            </ButtonGroup>
                        </div>
                    </Container>
                </Form>
            )}
        </Formik>
    );
}

export function PostFormField({name, placeholder}) {
    return (
        <div>
            <Field className="my-2 p-2 bg-neutral-700 text-white focus:outline-none w-full" name={name} placeholder={placeholder}/>
            <ErrorMessage component={"p"} className="text-red-300 text-sm" name={name} />
        </div>
    );
}