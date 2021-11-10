/**
 * Copyright (c) pxCode, Inc. and its affiliates.
 * This source code is licensed under the MIT license found in https://www.pxcode.io
 */

import React from 'react';
import Container from 'react-bootstrap/Container'
import { config } from './pxConfig.v1.00';

// posize version v1.00.2

const StyleSheet = config.StyleSheet;
const css = config.css;

const styles = StyleSheet.create({
  absTrack: {
    display: 'grid',
    pointerEvents: 'none',
    position: 'absolute',
    width: '100%',
    height: '100%'
  },

  relTrack: {
    display: 'grid',
    pointerEvents: 'none',
    position: 'relative',
    // height: '100%', no need set height
    width: '100%',
  },

  area: {
    pointerEvents: 'auto',
    position: 'relative',
    width: '100%', // fit box, it is necessary because child need refer parent size
    height: '100%' // fit box, it is necessary because child need refer parent size
  },

  debugTrack: {
    outlineWidth: 1,
    outlineColor: 'rgba(76,76,76,0.41)',
    outlineStyle: 'dotted',
    outlineOffset: -1
  },

  debugArea: {
    outlineWidth: 3,
    outlineColor: '#10670950',
    outlineStyle: 'solid',
    outlineOffset: -3
  },

  debugAbsArea: {
    outlineWidth: 3,
    outlineColor: '#ff0000',
    outlineStyle: 'solid',
    outlineOffset: -3
  }
});

const classNameMaps = new Map();

function hashFun(obj) {
  const str = JSON.stringify(obj);
  let hash = 5381;
  let i = str.length;
  while (i) { hash = (hash * 33) ^ str.charCodeAt(i -= 1); }
  hash = (hash >>> 0).toString(36);

  if (config.hashName) {
    return hash;
  } else {
    let result = classNameMaps.get(hash);
    if (!result) {
      result = `${classNameMaps.size + 1}`;
      classNameMaps.set(hash, result);
    }
    return result;
  }
}

const rep = /\s*,\s*/g
const split = /\s+/

function genTrackStyles(x, y, zIndex, display) {
  let result = {};
  if(x && y) {
    result = {
      grid: `${y} / ${x}`
    };
  }

  if(zIndex) {
    result.zIndex = zIndex;
  }

  if(display === 'show') {
    result.display = 'grid';
  } else if(display === 'none') {
    result.display = 'none';
  }

  return result;
}

function genAreaStyles(x, y) {
  if(!x || !y) return {};

  const v = Math.round(y.replace(rep, ',').split(split).length / 2);
  const h = Math.round(x.replace(rep, ',').split(split).length / 2);

  return {
    gridArea: `${v} / ${h} / ${v} / ${h}`
  }
}

function genGridStyles(x, y, maxX, maxY, xxxlX, xxxlY, xxlX, xxlY, xlX, xlY, lgX, lgY, mdX, mdY, smX, smY, xsX, xsY,
                       zIndex, maxZIndex, xxxlZIndex, xxlZIndex, xlZIndex, lgZIndex, mdZIndex ,smZIndex, xsZIndex,
                       maxDisplay, xxxlDisplay, xxlDisplay, xlDisplay, lgDisplay, mdDisplay ,smDisplay, xsDisplay,
                       trackStyle, areaStyle) {
  const track = {
    ...genTrackStyles(x, y),
    '@media (max-width: 99999px)': genTrackStyles(maxX, maxY, maxZIndex, maxDisplay),
    '@media (max-width: 2999.98px)': genTrackStyles(xxxlX, xxxlY, xxxlZIndex, xxxlDisplay),
    '@media (max-width: 1919.98px)': genTrackStyles(xxlX, xxlY, xxlZIndex, xxlDisplay),
    '@media (max-width: 1399.98px)': genTrackStyles(xlX, xlY, xlZIndex, xlDisplay),
    '@media (max-width: 1199.98px)': genTrackStyles(lgX, lgY, lgZIndex, lgDisplay),
    '@media (max-width: 991.98px)': genTrackStyles(mdX, mdY, mdZIndex, mdDisplay),
    '@media (max-width: 767.98px)': genTrackStyles(smX, smY, smZIndex, smDisplay),
    '@media (max-width: 575.98px)': genTrackStyles(xsX, xsY, xsZIndex, xsDisplay),

    zIndex,
    ...trackStyle
  };

  const area = {
    ...genAreaStyles(x, y),
    '@media (max-width: 99999px)': genAreaStyles(maxX, maxY),
    '@media (max-width: 1920px)': genAreaStyles(xxxlX, xxxlY),
    '@media (max-width: 1400px)': genAreaStyles(xxlX, xxlY),
    '@media (max-width: 1200px)': genAreaStyles(xlX, xlY),
    '@media (max-width: 992px)': genAreaStyles(lgX, lgY),
    '@media (max-width: 768px)': genAreaStyles(mdX, mdY),
    '@media (max-width: 576px)': genAreaStyles(smX, smY),
    '@media (max-width: 320px)': genAreaStyles(xsX, xsX),

    ...areaStyle
  };

  const trackName = `${hashFun(track)}`;
  const areaName = `${hashFun(area)}`;
  return {
    styles: StyleSheet.create({
      [trackName]: track,
      [areaName]: area
    }),
    trackName,
    areaName
  };
}

export const Posize = (props) => {
  const {
    x = '1fr 1fr 1fr',
    y = '1fr 1fr 1fr',
    zIndex,
    maxX, maxY, xxxlX, xxxlY, xxlX, xxlY, xlX, xlY, lgX, lgY, mdX, mdY, smX, smY, xsX, xsY,
    maxZIndex, xxxlZIndex, xxlZIndex, xlZIndex, lgZIndex, mdZIndex ,smZIndex, xsZIndex,
    maxDisplay, xxxlDisplay, xxlDisplay, xlDisplay, lgDisplay, mdDisplay ,smDisplay, xsDisplay,
    name,
    absolute,
    trackStyle,
    areaStyle,
    altClassName,
    children,
    debug
  } = props;

  const gridStyles = genGridStyles(x, y, maxX, maxY, xxxlX, xxxlY, xxlX, xxlY, xlX, xlY, lgX, lgY, mdX, mdY, smX, smY, xsX, xsY,
    zIndex, maxZIndex, xxxlZIndex, xxlZIndex, xlZIndex, lgZIndex, mdZIndex ,smZIndex, xsZIndex,
    maxDisplay, xxxlDisplay, xxlDisplay, xlDisplay, lgDisplay, mdDisplay ,smDisplay, xsDisplay, trackStyle, areaStyle);
  return (
    <div key={'track'}
         className={
           [
             'track',
             altClassName? `${altClassName}_track` : null,
             css(absolute ? styles.absTrack : styles.relTrack,
               gridStyles.styles[gridStyles.trackName],
               (config.debug || debug) && styles.debugTrack)
           ].filter(e => !!e).join(' ')} id={name ? `${name}Track` : null}>
      <div key={'area'}
           className={
             [
               'area',
               altClassName? `${altClassName}_area` : null,
               css(styles.area,
                 gridStyles.styles[gridStyles.areaName],
                 (config.debug || debug) && (absolute? styles.debugAbsArea : styles.debugArea))
             ].filter(e => !!e).join(' ')} id={name ? `${name}Area` : null}>
        { children }
      </div>
    </div>
  );
};

function wrapTag(Tag) {
  return ({ id, x, y, maxX, maxY, xxxlX, xxxlY, xxlX, xxlY, xlX, xlY, lgX, lgY, mdX, mdY, smX, smY, xsX, xsY,
            zIndex, maxZIndex, xxxlZIndex, xxlZIndex, xlZIndex, lgZIndex, mdZIndex ,smZIndex, xsZIndex,
            maxDisplay, xxxlDisplay, xxlDisplay, xlDisplay, lgDisplay, mdDisplay ,smDisplay, xsDisplay,
            absolute, trackStyle, areaStyle, className, altClassName, children, ...props }) => {
    const posizeProps = { name: id, x, y, maxX, maxY, xxxlX, xxxlY, xxlX, xxlY, xlX, xlY, lgX, lgY, mdX, mdY, smX, smY, xsX, xsY,
      zIndex, maxZIndex, xxxlZIndex, xxlZIndex, xlZIndex, lgZIndex, mdZIndex ,smZIndex, xsZIndex,
      maxDisplay, xxxlDisplay, xxlDisplay, xlDisplay, lgDisplay, mdDisplay ,smDisplay, xsDisplay, absolute, trackStyle, areaStyle, altClassName };
    const cn = [className, altClassName].filter(Boolean).join(' ');
    return (
      <Posize {...posizeProps}>
        <Tag id={id} className={cn} {...props}>
          {children}
        </Tag>
      </Posize>
    );
  };
}

export const Px = wrapTag('div');

Px.div = wrapTag('div');
Px.a = wrapTag('a');
Px.img = wrapTag('img');
Px.article = wrapTag('article');
Px.section = wrapTag('section');
Px.header = wrapTag('header');
Px.footer = wrapTag('footer');
Px.nav = wrapTag('nav');
Px.h1 = wrapTag('h1');
Px.h2 = wrapTag('h2');
Px.h3 = wrapTag('h3');
Px.h4 = wrapTag('h4');
Px.h5 = wrapTag('h5');
Px.h6 = wrapTag('h6');
Px.p = wrapTag('p');
Px.figure = wrapTag('figure');
Px.hr = wrapTag('hr');
Px.canvas = wrapTag('canvas');

Px.BootstrapContainer = wrapTag(Container);

export const commonStyles = StyleSheet.create({
  anchor: {
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'opacity 0.2s',

    ':visited': { textDecoration: 'underline' },

    ':hover': {
      opacity: 0.7,
      textDecoration: 'underline'
    }
  },

  clickable: {
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'opacity 0.2s',
    ':hover': { opacity: 0.7 }
  },

  textinput: {
    display: 'block',
    border: 0,
    padding: 0,
    width: '100%',
    verticalAlign: 'top',
    backgroundColor: 'transparent',
    ':focus': { outline: 'none' }
  }
});

