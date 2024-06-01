import {
  Form,
  Formik,
  FormikHandlers,
  FormikHelpers,
  FormikState,
} from "formik";
import usePost from "hooks/usePost";
import { FormContentProps } from "./FormContent.type";

const FormContent = (props: FormContentProps) => {
  const { url, method, children, className = "" } = props;
  const mutatePost = usePost();
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          mutatePost.mutate({ url, method, data: values });
        }}
      >
        {(props: FormikState<any> & FormikHelpers<any> & FormikHandlers) => (
          <Form
            className={className}
            onKeyDown={(e) => {
              e.key === "Enter" && e.preventDefault();
            }}
            onSubmit={(e) => {
              e.preventDefault();
              props.handleSubmit();
            }}
            autoComplete="off"
          >
            {children({ ...props, ...mutatePost })}
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default FormContent;
