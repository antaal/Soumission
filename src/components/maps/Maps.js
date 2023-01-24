import React from 'react'
import './maps.css';
export default function Maps() {
  return (
   
        <div className="map " >
            <iframe width="100%" height="600" src="https://maps.google.com/maps?width=700&amp;height=500&amp;hl=en&amp;q=Dakar%2C%20Senegal+(Fond%20D%5C'Appui)&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            {/* <div style="position: absolute;width: 80%;bottom: 10px;left: 0;right: 0;margin-left: auto;margin-right: auto;color: #000;text-align: center;">
              <small style="line-height: 1.8;font-size: 2px;background: #fff;">Powered by <a href="http://www.googlemapsgenerator.com/ja/">googlemapsgen (ja)</a> & <a href="https://theimpossiblequiz.info/">theimpossiblequizanswers</a></small></div>
              <style>#gmap_canvas img{max-width:none!important;background:none!important}</style></div><br /> */}
    </div>
  )
}
