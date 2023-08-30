import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h3 className="project-heading" style={{ paddingBottom: "20px" }}>
        Github <strong>Code</strong>
      </h3>
      <GitHubCalendar
        username="dineshkumar-stack"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
