import { ITopic } from '../../../../modules/shared/types.js';
import { text, http } from '../../../../modules/topic-content/index.js';

const Topic = (): ITopic => ({
  name: 'Request',
  content: [
    text('HTTP is a protocol for fetching resources such as HTML documents. It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser. A complete document is reconstructed from the different sub-documents fetched, for instance, text, layout description, images, videos, scripts, and more.'),

    text('Request:'),
    http(`GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr`),

    text('Response:'),
    http(`HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html

<!DOCTYPE html>… (here come the 29769 bytes of the requested web page)`),
  ],
  sources: [
    '',
  ],
});

export default Topic;
