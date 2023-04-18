import { useNavigate} from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yp from "yup";
import { Button, ButtonRed, ButtonSubmit, Page, Container, ButtonGroup } from "../components/Page";
import { usePostContext } from "../context/PostContext";

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