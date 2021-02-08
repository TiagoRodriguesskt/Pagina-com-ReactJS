// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from "react-materialize";
// Importando o componenet UserProfile
import UserProfile from "./user_profile/user_profile";
// Importando o component Experience
import Experience from "./experience/experience";
// Importando o avatar da empresa 1
import company_avatar from "./images/company.png";
// Importando o avatar da empresa 1
import company_avatar2 from "./images/company_avatar2";

const Home = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
      <h5 className="subtitle">Sobre mim</h5>
      <Card>
        <div>
          <p>
            <b>Olá!!!</b>
          </p>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut laborevoluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum."
          </p>
          <br />
          <p>
            <b>Sempre!!!</b>
          </p>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut laborevoluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum."
          </p>
        </div>
      </Card>
      <h5 className="subtitle">Experiências</h5>

      {/* Passando os parâmetros title, company, description e avatar para o component Experience */}
      <Experience
        title="Programador"
        company="SoLokos"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
        avatar={company_avatar}
      />
      <Experience
        title="ReactJS"
        company="AquiMesmo"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
        avatar={company_avatar2}
      />
    </Col>
  </Row>
);

export default Home;
