import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Convention.css';

import { Container, Row, Button } from 'react-bootstrap';

import {ReactComponent as Illustration} from './assets/commit.svg';

function Convention() {
  return (
    <div className="Convention">
      <header className="Convention-header">
        <Container>
          <Row>
          <div class="col col-md-7" id="presentation">
            <h1>SECOM CONVENTION</h1>
            <p>A convention for security commit messages</p>
            <Button variant="outline-light">Best Practices - <i>Soon</i></Button>{' '}
            <a href="https://github.com/TQRG/security-patches-dataset" target="_blank">
              <Button variant="outline-light">Dataset</Button>
          </a>
           
          </div>
          <div class="col col-md-4" id="illustration">
            <Illustration />
          </div>
          </Row>
        </Container>
        </header>
      <div class="main-section">
        <Container>
          <Row>
          <div class="col col-md-12">
            <h1>Security Commits</h1>
            <p>A convention for making security commit messages more readable and structured. We 
              aim to further the development of technology on top of commit messages for security. 
            </p>
            <pre>
              <code>
              patch: Summarize changes in ~50 characters (CVE-YEAR-NO)
              <br></br>
              <br></br>
              Detailed explanation of the subject/header in ~75 words.
              <br></br>
              Explain the security issue that this commit is patching. 
              <br></br>
              Focus on why this patch is important and its impact.  
              <br></br>
              Describe how the issue is patched. 
              <br></br>
              <br></br>
SEVERITY: The severity of the  issue (LOW, MEDIUM, HIGH, CRITICAL).
<br></br>
WEAKNESS: The weakness name or CWE-ID.
<br></br>
DETECTION: The method used to detect the issue (TOOL, MANUAL, EXPLOIT).
<br></br>
REPORT: http://link-to-report/
<br></br>
<br></br>
REPORTED-BY: reporter Name &lt;reporter-email@host.com&gt;
<br></br>
SIGNED-OFF-BY: your Name &lt;your-email@yourhost.com&gt;
<br></br>
<br></br>
If you use an issue tracker, add reference to it here:
<br></br>
<br></br>
[if external issue tracker]
<br></br>
BUG-TRACKER: https://link-to-bug-tracker/id  
<br></br>
<br></br>

[if github used as issue tracker]
<br></br>

Resolves: #123
<br></br>

See also: #456, #789

              </code>
            </pre>
            </div>
            </Row>
        </Container>
        <hr></hr>

        <Container>
          <Row>
            <h1>Details</h1>
            <p>This convention was inferred from merging different sources about creating 
              better commits messages and from empirical research performed upon security commit messages.
            </p>
            <div class="col col-md-6">
            <pre>
            <code>
              &lt;type&gt;: &lt;header/subject&gt; (&lt;CVE-ID&gt;)
              <br></br>
              <br></br>
              &lt;body&gt;
              <br></br>
              <br></br>
              SEVERITY: &lt;LOW, MEDIUM, HIGH,  CRITICAL&gt;
              <br></br>
              WEAKNESS: &lt;WEAKNESS NAME or CWE-ID&gt;
              <br></br>
              DETECTION: &lt;DETECTION&gt;
              <br></br>
              REPORT: &lt;REPORT_LINK&gt;
              <br></br>
              <br></br>
              REPORTED-BY: &lt;NAME&gt; &lt;CONTACT&gt;
              <br></br>
              SIGNED-OFF-BY: &lt;NAME&gt; &lt;CONTACT&gt;
              <br></br>
              <br></br>
              BUG-TRACKER: &lt;BUG-TRACKER-LINK&gt;
              <br></br>
              OR
              <br></br>
              Resolves: &lt;ISSUE/PR NO&gt;
              <br></br>
              See also: &lt;ISSUE/PR NO&gt;
            </code>
          </pre>
        <p><strong>Important:</strong> <br></br>
        <code class="details-code">&lt;type&gt;</code>{' '},{' '}
        <code class="details-code">&lt;header/subject&gt;</code>,<br></br>
        <code class="details-code">&lt;CVE-ID&gt;</code>,
        <code class="details-code">&lt;body&gt;</code>{' '},{' '}
        <code class="details-code">SEVERITY</code>{' '},{' '}
        <code class="details-code">WEAKNESS</code>
        <br></br>
        <br></br>
        In the future, we plan to infer the importance of each field
        and determine different levels of compliance. For now, we 
        believe the previous set of fields is the minimum required to detect and classify security
        commits.
        </p>
          </div>
          <div class="col col-md-6 details">
            <ul>
              <li>A <code class="details-code">&lt;type&gt;</code> should be assigned to each commit <a href="https://www.conventionalcommits.org/en/v1.0.0/" target="_blank">[1]</a>. Our suggestion is the word 
              patch since it is usually used to refer to security fixes.</li>
              <li><code class="details-code">&lt;header/subject&gt;</code>: ~50 chars (max 72 chars); capitalized; no period in the end; imperative form.</li>
              <li><code class="details-code">&lt;CVE-ID&gt;</code>: When available.</li>

              <li><code class="details-code">&lt;body&gt;</code>: Describe what (problem), why (impact) and how (patch). ~75 words (25 words per point).</li>
              <li><code class="details-code">SEVERITY</code>: Severity of the issue.<br></br>Values: LOW, MEDIUM, HIGH, CRITICAL</li>
              <li><code class="details-code">WEAKNESS</code>: Name or CWE-ID.</li>
              <li><code class="details-code">DETECTION</code>: Detection method.<br></br>Values: TOOL, MANUAL, EXPLOIT, etc.</li>
              <li><code class="details-code">REPORT</code>: Link for vulnerability report.</li> 
              <li><code class="details-code">REPORTED-BY</code>: Name/Contact of the person that reported the issue.</li>
              <li><code class="details-code">SIGNED-OFF-BY</code>: Name/Contact of the person that closed the issue.</li>
              <li><code class="details-code">BUG-TRACKER</code>: Link to the issue in an external bug-tracker.</li>
              <li><code class="details-code">Resolves.. See also</code>: When GitHub is used to manage security fixes.</li>
            </ul>
          </div>

          </Row>
        </Container>
          <hr></hr>
        <Container>
          <Row>
            <h1>Example</h1>
            <p>This is an example of the application of SECOM convention to a known security commit message <a href="https://github.com/curl/curl/commit/75ca568fa1c19de4c5358fed246686de8467c238" target="_blank"><code class="details-code">[curl/curl/75ca568]</code></a>: </p>
            <div class="col col-md-12">
            <pre>
            <code>
            patch: Sanitize URLs to reject malicious data (CVE-2012-0036)
            <br></br>
            <br></br>
Protocols (IMAP, POP3 and SMTP) that use the path part of a URL in a<br></br>
decoded manner now use the new Curl_urldecode() function to reject URLs<br></br>
with embedded control codes (anything that is or decodes to a byte value<br></br>
less than 32).
<br></br>
<br></br>
URLs containing such codes could easily otherwise be used to do harm and<br></br>
allow users to do unintended actions with otherwise innocent tools and<br></br>
applications. Like for example using a URL like<br></br>
pop3://pop3.example.com/1%0d%0aDELE%201 when the app wants a URL to get a mail <br></br>
and instead this would delete one.
<br></br>
<br></br>
SEVERITY: HIGH
<br></br>
WEAKNESS: CWE-89
<br></br>
DETECTION: MANUAL
<br></br>
REPORT: https://curl.se/docs/CVE-2012-0036.html
<br></br>
<br></br>
REPORTED-BY: Dan Fandrich
<br></br>
SIGNED-OFF-BY: Daniel Stenberg (daniel@haxx.se)
<br></br>
<br></br>
Resolves: #17940
<br></br>
See also: #17937
            </code>
          </pre>
          </div>
          </Row>
        </Container>
        <Container>
          <Row>
            <h1>Sources</h1>
            <ol>
              <li>Conventional Commits V1.0.0 <a href="https://www.conventionalcommits.org/en/v1.0.0/" target="_blank">🔗</a></li>
              <li>How to Write a Git Commit Message by Chris Beams <a href="https://chris.beams.io/posts/git-commit/" target="_blank">🔗</a></li>
              <li>A good commit message looks like this by Linus Torvalds <a href="https://gist.github.com/matthewhudson/1475276" target="_blank">🔗</a></li>
            </ol>
          </Row>
        </Container>
        </div>
        <header className="footer">
          <Container>
            <Row>
              <p>Collaboration between <a href="https://tecnico.ulisboa.pt/en/" target="_blank">Técnico</a> (U. Lisbon), <a href="https://sigarra.up.pt/feup/en/web_page.inicial" target="_blank">FEUP</a> (U. Porto), <a href="https://www.cmu.edu/" target="_blank">Carnegie Mellon University</a> (CMU)</p>
            </Row>
          </Container>
          
        </header>
    </div>
  );
}

export default Convention;
