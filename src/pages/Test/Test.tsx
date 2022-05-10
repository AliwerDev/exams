import React from "react";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Flex from "../../components/Flex";
import { IRootState } from "../../redux/reducers";
import StyledTest from "./StyledTest";

const test = {
  title: "Test page title first test with styled-components",
  id: 9,
  testId: 1,
  questionModelList: [
    {
      id: 7,
      text: "Quyidagi misolni yeching 7",
      ball: 2,
      answerModelList: [
        {
          id: 25,
          text: "1",
        },
        {
          id: 26,
          text: "2",
        },
        {
          id: 27,
          text: "3",
        },
        {
          id: 28,
          text: "4",
        },
      ],
    },
    {
      id: 1,
      text: "Quyidagi misolni yeching 1",
      ball: 1,
      answerModelList: [
        {
          id: 1,
          text: "1",
        },
        {
          id: 2,
          text: "2",
        },
        {
          id: 3,
          text: "3",
        },
        {
          id: 4,
          text: "4",
        },
      ],
    },
    {
      id: 2,
      text: "Quyidagi misolni yeching 2",
      ball: 1,
      answerModelList: [
        {
          id: 5,
          text: "1",
        },
        {
          id: 6,
          text: "2",
        },
        {
          id: 7,
          text: "3",
        },
        {
          id: 8,
          text: "4",
        },
      ],
    },
    {
      id: 9,
      text: "Quyidagi misolni yeching 9",
      ball: 6,
      answerModelList: [
        {
          id: 33,
          text: "1",
        },
        {
          id: 34,
          text: "2",
        },
        {
          id: 35,
          text: "3",
        },
        {
          id: 36,
          text: "4",
        },
      ],
    },
    {
      id: 8,
      text: "Quyidagi misolni yeching 8",
      ball: 3,
      answerModelList: [
        {
          id: 29,
          text: "1",
        },
        {
          id: 30,
          text: "2",
        },
        {
          id: 31,
          text: "3",
        },
        {
          id: 32,
          text: "4",
        },
      ],
    },
  ],
};

type answerType = {
  [key: number]: number;
};

const Test = ({ mode }: { mode: string }) => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const [answerObj, setanswerObj] = React.useState<{ [key: number]: number }>(
    {}
  );

  const cencel = () => {
    setanswerObj([]);
    navigate("../");
  };

  const handleClick = (questionId: number, answerId: number) => {
    setanswerObj((answerObj) => {
      const newanswerObj = { ...answerObj };
      newanswerObj[questionId] = answerId;
      return newanswerObj;
    });
  };

  return (
    <StyledTest mode={mode} open={open}>
      <main className="main">
        <div className="test">
          <p className="test_title">{test.title}</p>
          <Card>
            {test.questionModelList.map((question, i) => (
              <div className="test-box" key={question.id}>
                <p className="question" id={question.id + "_question"}>
                  <span className="char">{i + 1 + ". "}</span>
                  {question.text}
                </p>
                <div className="ans-box">
                  {question.answerModelList.map((answer, i) => (
                    <div
                      className={`ans-item ${
                        answerObj[question.id] === answer.id ? "active" : ""
                      }`}
                      key={answer.id}
                      onClick={() => handleClick(question.id, answer.id)}
                    >
                      <p>
                        <span className="char">
                          {String.fromCharCode(i + 97) + ") "}
                        </span>
                        {answer.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <Flex justify="flex-end" align="center" className="controle_footer">
              <Button variant="error">Testni Tugatish</Button>
            </Flex>
          </Card>
        </div>
      </main>
      <aside className="controle">
        <Button onClick={() => setOpen(true)} size="medium" className="openBtn">
          <FiMenu />
        </Button>
        <div className="controle-header">
          <Flex justify="space-between" align="center">
            <span onClick={() => setOpen(false)} className="times_aside">
              <FiX />
            </span>
            <p>1 : 23: 33</p>
            <Button
              onClick={cencel}
              size="small"
              variant="error"
              className="error-button"
            >
              Chiqish <FiArrowRight />
            </Button>
          </Flex>
        </div>
        <Flex justify="flex-start" direction="column" className="controle-body">
          <p className="title">Savol</p>
          <div className="tests_buttons">
            {test.questionModelList.map((question, i) => (
              <Button
                onClick={() => {
                  const example: Element | null = document.getElementById(
                    question.id + "_question"
                  );
                  example && example.scrollIntoView();
                }}
                key={question.id}
                isIcon={true}
                variant={answerObj[question.id] ? "warning" : "primary"}
              >
                {i + 1}
              </Button>
            ))}
          </div>
          <Flex justify="flex-end" align="center" className="controle_footer">
            <Button variant="primary">Testni Tugatish</Button>
          </Flex>
        </Flex>
      </aside>
    </StyledTest>
  );
};

const mapStateToProps = (state: IRootState) => {
  return {
    mode: state.settings.mode,
  };
};
const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
