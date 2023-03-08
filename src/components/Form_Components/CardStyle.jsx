import styled from "styled-components";

const Card = styled.div`
  width: ${(p) => (p.fullWidth ? "500px" : "350px")};
  display: flex;
  flex-direction: column;
  margin: auto;
  height: ${(p) => (p.fullWidth ? "140vh" : "100vh")};
  justify-content: center;
`;

const FormWrapper = styled.div`
  background-color: black;
  width: 100%;
  min-height: 400px;
  flex-shrink: 0;
  border-radius: 5px;
  header {
    text-align: center;
    font-size: 20px;
    margin-top: 30px;
  }
`;

function CardStyle(props) {
  return (
    <div style={{backgroundColor: "#eadbfc"}}>
      <Card fullWidth={props.fullWidth}>
        <FormWrapper>
          <header>
            <h2> {props.pageName} </h2>
          </header>
          {props.children}
        </FormWrapper>
      </Card>
    </div>
  );
}
export default CardStyle;

// card -> common
