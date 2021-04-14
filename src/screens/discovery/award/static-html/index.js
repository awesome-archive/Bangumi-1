/*
 * @Author: czy0729
 * @Date: 2019-08-22 12:21:28
 * @Last Modified by: czy0729
 * @Last Modified time: 2019-08-22 16:08:31
 */
import HTML2018 from './2018'
import HTML2017 from './2017'
import HTML2016 from './2016'
import HTML2015 from './2015'
import HTML2014 from './2014'
import HTML2013 from './2013'
import HTML2012 from './2012'
import HTML2011 from './2011'
import HTML2010 from './2010'

/**
 * 返回指定年份年鉴html
 * @param {*} year
 */
export default function getAwardHTML(year) {
  switch (year) {
    case '2017':
      return HTML2017
    case '2016':
      return HTML2016
    case '2015':
      return HTML2015
    case '2014':
      return HTML2014
    case '2013':
      return HTML2013
    case '2012':
      return HTML2012
    case '2011':
      return HTML2011
    case '2010':
      return HTML2010
    default:
      return HTML2018
  }
}
