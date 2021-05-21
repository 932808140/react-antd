import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Carousel } from 'antd';
import React, { useRef } from 'react';
import './index.css';

export default function IndexPage() {
  const carouselRef = useRef<any>();
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  //切换面板的回调
  const afterChange = (current: any) => {
    //console.log(current);
  };
  //切换面板的回调
  const beforeChange = (from: any, to: any) => {
    //console.log(from, to);
  };
  //切换到上一面板
  const leftScrollx = () => {
    carouselRef.current.prev();
  };
  //切换到下一面板
  const rightScrollx = () => {
    carouselRef.current.next();
  };
  //指定到3
  const onClick = () => {
    carouselRef.current.goTo(2);
  };
  return (
    <>
      <Carousel
        ref={carouselRef}
        autoplay={true}
        dotPosition={'bottom'}
        //dots={{ className: 'dots' }}
        effect={'scrollx'}
        afterChange={afterChange}
        beforeChange={beforeChange}
      >
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <LeftOutlined
        style={{
          position: 'absolute',
          fontSize: '40px',
          top: '109px',
          left: '198px',
        }}
        onClick={leftScrollx}
      />
      <RightOutlined
        style={{
          position: 'absolute',
          fontSize: '40px',
          top: '109px',
          right: '198px',
        }}
        onClick={rightScrollx}
      />
      <Button onClick={onClick}>指定到3</Button>
    </>
  );
}
