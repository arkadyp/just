import React from 'react';
import Evaluate from './Evaluate';

export default ({moduleName, script}) => (
  <section id="react-root" style={{flex: 3}} className="main-content right-col">
    <div>
      <span style={{fontFamily: 'consolas'}}>
        npm install <a href={`https://www.npmjs.com/package/${moduleName}`}>
          {moduleName}
        </a>
      </span>
      <Evaluate script={script}/>
    </div>
  </section>
);