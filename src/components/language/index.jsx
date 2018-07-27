import React from 'react';
import { autobind } from 'core-decorators';
import cookie from 'js-cookie';
import qs from 'querystring';

export default class Language extends React.Component {
  @autobind
  onLanguageChange(language) {
    const { location, history } = this.props;
    cookie.set('docsite_language', language, { expires: 365, path: '' });
    // 语言版本在hash上也存一份，方便分享链接时能够获取语言版本
    const search = qs.parse(location.search.slice(1) || '');
    search.lang = language;
    history.push(`${location.pathname}?${qs.stringify(search)}`);
    this.forceUpdate();
  }
}
