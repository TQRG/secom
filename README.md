# SECOM

A convention for making security commit messages more readable and structured. We aim to further the development of technology on top of commit messages for security.

```
1   vuln-fix: subject/header containing summary of changes in ~50 characters (Vuln-ID,)
2
3   Detailed explanation of the subject/header in ~75 words.
4   Explain the security issue(s) that this commit is patching.
5   Focus on why this patch is important and its impact.
6   Describe how the issue is patched.
7
8   [For Each Weakness in Weaknesses:]
9   Weakness: weakness identification or CWE-ID.
10  Severity: severity of the  issue (Low, Medium, High, Critical).
11  CVSS: numerical representation (0-10) of the vulnerability severity.
12  Detection: method used to detect the issue (Tool, Manual, Exploit).
13  Report: http://link-to-report/
14  Introduced in: commit hash.
15  [End]
16
17  Reported-by: reporter name 1 <reporter-email-1@host.com>
18  Reported-by: reporter name 2 <reporter-email-2@host.com>
19  Signed-off-by: your name <your-email@yourhost.com>
20
21  [If you use an issue tracker, add reference to it here:]
22  [if external issue tracker:]
23  Bug-tracker: https://link-to-bug-tracker/id
24
25  [if github used as issue tracker:]
26  Resolves: #123
27  See also: #456, #789
```

# Details

This convention was inferred from merging different sources about creating better commits messages and from empirical research performed upon security commit messages.

```
<type>: <header/subject> (<Vuln-ID>)

<body>

Weakness: <Weakness Name or CWE-ID>
Severity: <Low, Medium, High and Critical>
CVSS: <Numerical representation (0-10) of severity>
Detection: <Detection Method>
Report: <Report Link>
Introduced in: <Commit Hash>

Reported-by: <Name> <Contact>
Signed-off-by: <Name> <Contact>

Bug-tracker: <Bug-tracker Link>
OR
Resolves: <Issue/PR No.>
See also: <Issue/PR No.>
```

* Atomic changes: Commit each patch as a separate change [4].
* A `<type>` should be assigned to each commit [1]. Our suggestion is the word vuln-fix to specify the fix is vulnerability related.
* `<header/subject>`: ~50 chars (max 72 chars); capitalized; no period in the end; imperative form.
* `<Vuln-ID>`: When available.
* `<body>`: Describe what (problem), why (impact) and how (patch). ~75 words (25 words per point).
* Weakness: Name or CWE-ID.
* Severity: Severity of the issue. Values: Low, Medium, High, Critical
* CVSS: Numerical (0-10) representation of the severity of a security vulnerability (Common Vulnerability Scoring System).
* Detection: Detection method. Values: Tool, Manual, Exploit, etc.
* Report: Link for vulnerability report.
* Introduced in: Commit hash from the commit that introduced the vulnerability.
* Reported-by: Name/Contact of the person that reported the issue.
* Signed-off-by: Name/Contact of the person that closed the issue.
* Bug-tracker: Link to the issue in an external bug-tracker.
* Resolves.. See also: When GitHub is used to manage security fixes.
  
In the future, we plan to infer the importance of each field and determine different levels of compliance. For now, we believe the following set of fields is the minimum required to detect and classify security commits succesfully: `<type>`, `<header/subject>`, `<Vuln-ID>`, `<body>`, Severity, Weakness.
