import React from 'react'

import './style.less'

class HomeAd extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const data = this.props.ad;
    return (
      <div id="home-ad">
        <h2>超值特惠</h2>
        <div>
          {data.map((item, index) => {
            return <div key={index} className="ad-item float-left">
              <a href={item.link} target="_blank">
                <img src={item.img} alt={item.title} style={{width: '100px'}}/>
              </a>
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default HomeAd;
