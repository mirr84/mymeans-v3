import React from 'react';

import {connector} from "../../store/utils/connector";
import lifecycle from "react-pure-lifecycle";
import LoadingOverlay from "react-loading-overlay";
import {
    Card,
    CardBody,
    CardColumns,
    CardSubtitle,
    CardText,
    CardTitle,
    Col,
    Row,
    Container, FormGroup, Input, Label
} from "reactstrap";

import {DebounceInput} from 'react-debounce-input';
import ImageZoom from 'react-medium-image-zoom'
import {getNewsList} from "../../services/newsService";
import {Link} from "react-router-dom";

const methods = {
    componentWillMount(props) {
        console.log('init Home');

        props.dispatch.setter('newsReducer', {});
        getNewsList({state: props.state, dispatch: props.dispatch, filter: props.state.newsReducer.filter});

    }
}

const Home = ({state, dispatch}) =>
    <div>

        <Container fluid={true}>
            <Row>
                <Col>
                    <FormGroup>
                        <Label for="newsFilter">newsFilter</Label>
                        <DebounceInput debounceTimeout={500} minLength={1} element={Input}
                                       bsSize={'sm'}
                                       type="text"
                                       name="newsFilter"
                                       id="newsFilter"
                                       placeholder="newsFilter"
                                       value={state.newsReducer.filter}
                                       onChange={
                                           (e) => {
                                               dispatch.setter('newsReducer', {filter: e.target.value});
                                               getNewsList({state, dispatch, filter: e.target.value.trim()});
                                           }
                                       }
                        />
                    </FormGroup>
                </Col>
            </Row>

            <LoadingOverlay
                active={state.newsReducer.isLoadingNews}
                spinner
                text='Loading your content...'
            >

                <Row>
                    <Col>
                        <CardColumns>

                            {
                                state.newsReducer.items.map(
                                    item =>
                                        <Card key={item.id} body={!!item.body} inverse={!!item.inverse}
                                              style={item.style} color={item.color}>
                                            {
                                                item.cardImg &&
                                                    <ImageZoom
                                                        image={{
                                                            src: item.cardImg,
                                                            alt: 'Golden Gate Bridge',
                                                            className: 'img',
                                                            style: { width: '100%' }
                                                        }}
                                                        zoomImage={{
                                                            src: item.cardImg,
                                                            alt: 'Golden Gate Bridge'
                                                        }}
                                                    />
                                            }

                                            {
                                                (item.cardTitle || item.cardSubtitle || item.cardText || item.button) &&
                                                <CardBody>
                                                    {
                                                        item.cardTitle && <CardTitle>{item.cardTitle}</CardTitle>
                                                    }
                                                    {
                                                        item.cardSubtitle &&
                                                        <CardSubtitle>{item.cardSubtitle}</CardSubtitle>
                                                    }
                                                    {
                                                        item.cardText && <CardText>{item.cardText}</CardText>
                                                    }
                                                    {
                                                        item.button && <Link to={`/news/${item.id}`} className={'btn btn-secondary'}>
                                                            Перейти к новости
                                                        </Link>
                                                    }
                                                </CardBody>
                                            }
                                        </Card>
                                )
                            }
                        </CardColumns>
                    </Col>
                </Row>

            </LoadingOverlay>

            {
                !state.newsReducer.count && !state.newsReducer.isLoadingNews &&
                <Row>
                    <Col>
                        Нет данных для отображения
                    </Col>
                </Row>
            }

        </Container>


    </div>

export default connector(lifecycle(methods)(Home));
