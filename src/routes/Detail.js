import React from "react";

class Detail extends React.Component {
  // 실행순서 2
  componentDidMount() {
    console.log(this.props);
    const { location, history } = this.props;
    if (location.state === undefined) {
      // 주소창에 url 입력을 통한 페이지 이동을 금지
      history.push("/"); //redirect: 유저를 홈으로
    }
    console.log(location.state);
  }

  // 실행순서 1
  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}

export default Detail;
