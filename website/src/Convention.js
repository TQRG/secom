import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Convention.css';

import { Container, Row, Button } from 'react-bootstrap';

import {ReactComponent as Illustration} from './assets/commit.svg';
import GitHubButton from 'react-github-btn'
import msr22 from './documents/msr22.pdf';


function Convention() {
  return (
    <div className="Convention">
      <header className="Convention-header">
        <Container>
          <Row>
          <div class="col col-md-7" id="presentation">
            <h1>SECOM CONVENTION</h1>
            <p>A convention for security commit messages</p>
            <a href="https://github.com/TQRG/secom/blob/main/CONFIG.md" target="_blank" rel="noreferrer">
              <Button variant="outline-light">How to configure</Button>{' '}
            </a>
            <a href="https://forms.gle/D4PizUX68qXWebjj8" target="_blank" rel="noreferrer">
              <Button variant="outline-light">Feedback</Button>{' '}
            </a>
            {/* <Button variant="outline-light">Best Practices - <i>Soon</i></Button>{' '} */}
            <a href="https://github.com/TQRG/security-patches-dataset" target="_blank" rel="noreferrer">
              <Button variant="outline-light">Dataset</Button>{' '}
            </a>
              <br></br>
            <GitHubButton href="https://github.com/TQRG/secom" data-color-scheme="no-preference: dark_high_contrast; light: dark_high_contrast; dark: dark_high_contrast;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star tqrg/secom on GitHub">Star</GitHubButton>
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
            <h1>News</h1>
            <p class="news">🤩  SECOM was accepted at the <i><a href="https://conf.researchr.org/track/msr-2022/msr-2022-industry-track#event-overview" rel="noreferrer">Mining Software Repositories</a></i> (MSR'22) Conference for the Industry Track, co-located with the <i><a href="https://conf.researchr.org/home/icse-2022">International Conference in Software Engineering</a></i> (ICSE'22) - <a href={msr22} rel="_blank">pre-print</a>.</p>
          </Row>
        </Container>

        <Container>
          <Row>
          <div class="col col-md-12">
            <h1>Security Commits</h1>
            <p>A convention for making security commit messages more readable and structured. We 
              aim to further the development of technology on top of commit messages for security. 
            </p>
            <pre>
              <code>
              1   vuln-fix: subject/header containing summary of changes in ~50 characters (Vuln-ID,)
              <br></br>
              2
              <br></br>
              3   Detailed explanation of the subject/header in ~75 words.
              <br></br>
              4   (what) Explain the security issue(s) that this commit is patching. 
              <br></br>
              5   (why) Focus on why this patch is important and its impact.  
              <br></br>
              6   (how) Describe how the issue is patched. 
              <br></br>
              7
              <br></br>
              8   <strong>[For Each Weakness in Weaknesses:]</strong>
              <br></br>
              9   Weakness: weakness identification or CWE-ID.
              <br></br>
              10  Severity: severity of the issue (Low, Medium, High, Critical).
              <br></br>
              11  CVSS: numerical representation (0-10) of the vulnerability severity.
              <br></br>
              12  Detection: method used to detect the issue (Tool, Manual, Exploit).
              <br></br>
              13  Report: http://link-to-report/
              <br></br>
              14  Introduced in: commit hash.
              <br></br>
              15  <strong>[End]</strong>
              <br></br>
              16
              <br></br>
              17  Reported-by: reporter name 1 &lt;reporter-email-1@host.com&gt;
              <br></br>
              18  Reported-by: reporter name 2 &lt;reporter-email-2@host.com&gt;
              <br></br>
              19  Signed-off-by: your name &lt;your-email@yourhost.com&gt;
              <br></br>
              20
              <br></br>
              21  <strong>[If you use an issue tracker, add reference to it here:]</strong>
              <br></br>
              22  <strong>[if external issue tracker:]</strong>
              <br></br>
              23  Bug-tracker: https://link-to-bug-tracker/id 
              <br></br>
              24
              <br></br>
              25  <strong>[if github used as issue tracker:]</strong>
              <br></br>
              26  Resolves: #123
              <br></br>
              27  See also: #456, #789

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
              &lt;type&gt;: &lt;header/subject&gt; (&lt;Vuln-ID&gt;)
              <br></br>
              <br></br>
              &lt;body&gt;
              <br></br>
              # (what) describe the vulnerability/problem 
              <br></br>
              # (why) describe its impact
              <br></br>
              # (how) describe the patch/fix
              <br></br>
              <br></br>
              Weakness: &lt;Weakness Name or CWE-ID&gt;
              <br></br>
              Severity: &lt;Low, Medium, High and Critical&gt;
              <br></br>
              CVSS: &lt;Numerical representation (0-10) of severity&gt;
              <br></br>
              Detection: &lt;Detection Method&gt;
              <br></br>
              Report: &lt;Report Link&gt;
              <br></br>
              Introduced in: &lt;Commit Hash&gt;
              <br></br>
              <br></br>
              Reported-by: &lt;Name&gt; (&lt;Contact&gt;)
              <br></br>
              Signed-off-by: &lt;Name&gt; (&lt;Contact&gt;)
              <br></br>
              <br></br>
              Bug-tracker: &lt;Bug-tracker Link&gt;
              <br></br>
              OR
              <br></br>
              Resolves: &lt;Issue/PR No.&gt;
              <br></br>
              See also: &lt;Issue/PR No.&gt;
            </code>
          </pre>
        <p><strong>Important:</strong> <br></br>
        <code class="details-code">&lt;type&gt;</code>{' '},{' '}
        <code class="details-code">&lt;header/subject&gt;</code>,<br></br>
        <code class="details-code">&lt;Vuln-ID&gt;</code>,
        <code class="details-code">&lt;body&gt;</code>{' '},{' '}
        <code class="details-code">Severity</code>{' '},{' '}
        <code class="details-code">Weakness</code>
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
            <li>Atomic changes: Commit each patch as a separate change <a href="https://www.freshconsulting.com/insights/blog/atomic-commits/" target="_blank" rel="noreferrer">[4]</a>.</li>

            <li>A <code class="details-code">&lt;type&gt;</code> should be assigned to each commit <a href="https://www.conventionalcommits.org/en/v1.0.0/" target="_blank" rel="noreferrer">[1]</a>. Our suggestion is to use&nbsp;<code class="details-code">vuln-fix</code> to specify the fix is related to a vulnerability.</li>
              <li><code class="details-code">&lt;header/subject&gt;</code>: ~50 chars (max 72 chars); capitalized; no period in the end; imperative form.</li>
              <li><code class="details-code">&lt;Vuln-ID&gt;</code>: When available; e.g., CVE, OSV, GHSA, and other formats.</li>
              <li><code class="details-code">&lt;body&gt;</code>: Describe what (problem), why (impact) and how (patch). ~75 words (25 words per point).</li>
              <li><code class="details-code">Weakness</code>: Name or CWE-ID.</li>
              <li><code class="details-code">Severity</code>: Severity of the issue.<br></br>Values: Low, Medium, High, Critical</li>
              <li><code class="details-code">CVSS</code>: Numerical (0-10) representation of the severity of a security vulnerability (Common Vulnerability Scoring System).</li>
              <li><code class="details-code">Detection</code>: Detection method.<br></br>Values: Tool, Manual, Exploit, etc.</li>
              <li><code class="details-code">Report</code>: Link for vulnerability report.</li> 
              <li><code class="details-code">Introduced in</code>: Commit hash from the commit that introduced the vulnerability.</li> 
              <li><code class="details-code">Reported-by</code>: Name/Contact of the person that reported the issue.</li>
              <li><code class="details-code">Signed-off-by</code>: Name/Contact of the person that closed the issue.</li>
              <li><code class="details-code">Bug-tracker</code>: Link to the issue in an external bug-tracker.</li>
              <li><code class="details-code">Resolves.. See also</code>: When GitHub is used to manage security fixes.</li>
            </ul>
          </div>

          </Row>
        </Container>
          <hr></hr>
        <Container>
          <Row>
            <h1>Example</h1>
            <p>This is an example of the application of SECOM convention to a known security commit message <a href="https://github.com/curl/curl/commit/75ca568fa1c19de4c5358fed246686de8467c238" target="_blank" rel="noreferrer"><code class="details-code">[curl/curl/75ca568]</code></a>: </p>
            <div class="col col-md-12">
            <pre>
            <code>
            vuln-fix: Sanitize URLs to reject malicious data (CVE-2012-0036)
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
Weakness: CWE-89
<br></br>
Severity: High
<br></br>
Detection: Manual
<br></br>
Report: https://curl.se/docs/CVE-2012-0036.html
<br></br>
<br></br>
Reported-by: Dan Fandrich
<br></br>
Signed-off-by: Daniel Stenberg (daniel@haxx.se)
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
              <li>Conventional Commits V1.0.0 <a href="https://www.conventionalcommits.org/en/v1.0.0/" target="_blank" rel="noreferrer">🔗</a></li>
              <li>How to Write a Git Commit Message by Chris Beams <a href="https://chris.beams.io/posts/git-commit/" target="_blank" rel="noreferrer">🔗</a></li>
              <li>A good commit message looks like this by Linus Torvalds <a href="https://gist.github.com/matthewhudson/1475276" target="_blank" rel="noreferrer">🔗</a></li>
              <li>Developer Tip: Keep Your Commits “Atomic” by Sean Patterson <a href="https://www.freshconsulting.com/insights/blog/atomic-commits/" target="_blank" rel="noreferrer">🔗</a></li>
            </ol>
          </Row>
        </Container>
        </div>
        <header className="footer">
          <Container>
            <Row>
              <p>Collaboration between <a href="https://tecnico.ulisboa.pt/en/" target="_blank" rel="noreferrer">Técnico</a> (U. Lisbon), <a href="https://sigarra.up.pt/feup/en/web_page.inicial" target="_blank" rel="noreferrer">FEUP</a> (U. Porto), <a href="https://www.cmu.edu/" target="_blank" rel="noreferrer">Carnegie Mellon University</a> (CMU) . Maintained by <a href="https://twitter.com/sofiaoreis">@sofiaoreis</a></p>
            </Row>
          </Container>
          
        </header>
    </div>
  );
}

export default Convention;
