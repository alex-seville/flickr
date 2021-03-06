/**
 * GET /v2/tags/trending/2015/08/05/week?oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=sSvFroOULhxmt9jIkSxxG/Fu4qA=
 *
 * host: api.flickr.com
 * accept-encoding: gzip, deflate
 * user-agent: node-superagent/1.6.1
 * cookie: 
 * connection: close
 */

module.exports = function (req, res) {
  res.statusCode = 200;

  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("access-control-allow-methods", "POST, GET, OPTIONS, DELETE, PUT, PATCH");
  res.setHeader("access-control-expose-headers", "X-Total-Count, Link");
  res.setHeader("x-application-context", "application:prod-bf1");
  res.setHeader("set-cookie", ["BX=2h2dlu5ba50un&b=3&s=7g;Path=/;Domain=.flickr.com;Expires=Sun, 21-Jan-2018 19:32:39 GMT"]);
  res.setHeader("expires", "Thu, 01 Jan 1970 00:00:00 GMT");
  res.setHeader("x-total-count", "0");
  res.setHeader("link", "<http://api.flickr.com/media-catalog/v2/tags/trending/2015/08/05/week?oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=sSvFroOULhxmt9jIkSxxG%2FFu4qA%3D&pageNumber=0>; rel=\"first\", <http://api.flickr.com/media-catalog/v2/tags/trending/2015/08/05/week?oauth_consumer_key=68a62ca6dccd553ca49e069d4b68e92d&oauth_token=72157660394259366-112955b6c5659e6b&oauth_version=1.0&oauth_timestamp=499137600&oauth_nonce=fa0b22d0edb39252630a343f95b33988918a2e3d&oauth_signature_method=HMAC-SHA1&format=json&nojsoncallback=1&oauth_signature=sSvFroOULhxmt9jIkSxxG%2FFu4qA%3D&pageNumber=-1>; rel=\"last\"");
  res.setHeader("content-type", "application/json; charset=UTF-8");
  res.setHeader("content-encoding", "gzip");
  res.setHeader("vary", "Accept-Encoding");
  res.setHeader("date", "Fri, 22 Jan 2016 19:32:39 GMT");
  res.setHeader("age", "0");
  res.setHeader("server", "ATS");
  res.setHeader("transfer-encoding", "chunked");
  res.setHeader("connection", "close");
  res.setHeader("via", "http/1.1 r25.ycpi.sjb.yahoo.net (ApacheTrafficServer [cMsSfW])");
  res.setHeader("y-trace", "BAEAQAAAAACO1saUHDgOhgAAAAAAAAAA.ocNyXo3ly8AAAAAAAAAAAAFKfFIOdsVAAUp8Ug8w5fRGJ3MAAAAAA--");

  res.write(new Buffer("H4sIAAAAAAAAAA==", "base64"));
  res.write(new Buffer("i44FACm7TA0CAAAA", "base64"));
  res.end();
};
