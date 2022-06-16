import { Card, Row, Col } from 'antd';
import { useEffect, useState } from 'react';
import './style.css';

const { Meta } = Card;

const movies = [
    {
        id: 1,
        name: 'Pokemon',
        year: '2001',
        director: 'John Doe'
    },
    {
        id: 2,
        name: 'Butterfly effect',
        year: '2004',
        director: 'John Doe'
    },
    {
        id: 1,
        name: 'Eternal shunshine of the spotless mind',
        year: '2000',
        director: 'John Doe'
    },
    {
        id: 1,
        name: 'Eternal shunshine of the spotless mind',
        year: '2000',
        director: 'John Doe'
    },
    {
        id: 1,
        name: 'Eternal shunshine of the spotless mind',
        year: '2000',
        director: 'John Doe'
    }
];

const MovieItem = ({ name, year, director}) => {
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Meta title={name} description={`${year}, ${director}`} />
        </Card>
    );
};

function MoviesContent() {
    const [addAnimationSlideIn, setAddAnimationSlideIn] = useState(false);
    

    useEffect(() => {
        setTimeout(() => {
            setAddAnimationSlideIn(true);
        }, 2000);
    }, []);

    return (
        <>
            <Row gutter={[24, 16]} className={`slide ${addAnimationSlideIn ? 'slider-in' : 'slider-out'}` }>
                {movies.map(movie => 
                            <Col md={{ span: 6, offset: 2 }} sm={{ span: 8, offset: 2 }} xs={{span: 16, offset: 4}}>
                                <MovieItem {...movie}/>
                            </Col>
                )} 
            </Row>
            <button onClick={() => {
                setAddAnimationSlideIn(!addAnimationSlideIn);
            }}>Toggle</button>
    </>);
}

export default MoviesContent;