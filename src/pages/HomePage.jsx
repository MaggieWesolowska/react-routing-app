import React from 'react';
import Article from '../components/Article';

const articles = [
  {
    id: 1,
    title: 'Lorem ipsum dolor.',
    author: 'Lorem Ipsum',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse excepturi quis laudantium quas odio ullam, perferendis nam eveniet nobis assumenda id in exercitationem quia molestias sit accusantium! Perferendis, sit dicta.',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet.',
    author: 'Sit Amet',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis animi atque labore dolorem sed quos laudantium, suscipit tenetur molestiae unde!',
  },
  {
    id: 3,
    title:
      'Lorem ipsum dolor sit amet consectetur adipisicing.',
    author: 'Explicabo Repellat',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi omnis eius expedita totam ad porro ipsum tempora ipsam, molestias repudiandae, facilis dolorem natus veritatis minus?',
  },
];

const HomePage = () => {
  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ));
  return <div>{artList}</div>;
};

export default HomePage;
