import React, { Component } from "react";
import { message, Spin, Button, BackTop } from "antd";
import { SolarSystemLoading } from "react-loadingg";

import { Loading } from "../../utils/styles/general";
import { NewsGrid, Container } from "./styles";
import CardNews from "../../components/CardNews";
import news from "../../utils/news";
import { Pagination } from "antd";
import { Helmet } from 'react-helmet';

import { animateScroll as scroll } from "react-scroll";

export default class News extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      articles: [],
      total: 0,
      page: 2,
      loading: true,
      enable: false,
      spinning: false,
    };
  }

  componentDidMount(props) {
    news.get(`articles?page=1`).then(async (res) => {
      await this.setState({
        page: res.data.pages,
      });
      console.log(res.data.pages);
      news
        .get(`/articles?page=${this.state.page}`)
        .then(({ data: { docs: articles, pages: total } }) => {
          this.setState({ articles, loading: false, total: total });
        })
        .catch(() => {
          message.error("Algo deu errado tente mais tarde!");
        });
    });
  }
  handleChange = async (page) => {
    await this.setState({
      page: page,
    });
    news
      .get(`/articles?page=${this.state.page}`)
      .then(({ data: { docs: articles, pages: total } }) => {
        this.setState({ articles, loading: false, total: total });
        scroll.scrollToTop();
      })
      .catch(() => {
        message.error("Algo deu errado tente mais tarde!");
      });
  };

  render() {
    const { articles, loading } = this.state;

    return loading ? (
      <Loading>
        <SolarSystemLoading color='#FF9900'/>
      </Loading>
    ) : (
      <Spin spinning={this.state.spinning} size="large">
        <Helmet>
          <title>News | Space Hunter</title>
        </Helmet>
        <div style={{ marginTop: 100 }}>
          <BackTop></BackTop>
          <NewsGrid>
            {articles.map((article) => (
              <CardNews key={article._id} news={article} />
            ))}
          </NewsGrid>
          <Container>
            <Pagination
              total={20}
              defaultCurrent={this.state.total}
              onChange={this.handleChange}
            />
          </Container>
        </div>
      </Spin>
    );
  }
}
