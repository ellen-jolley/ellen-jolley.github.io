\ProvidesClass{cv}[]
\LoadClass[11pt,a4paper]{article}

\usepackage[]{parskip}       % Do not indent paragraphs
\usepackage{array}           % required for boldface tabular columns
\usepackage{ifthen}
\usepackage{tabularx}
%\setlength{\tabcolsep}{12pt}
\usepackage[explicit]{titlesec}
\usepackage[normalem]{ulem}
\usepackage[
  backend=biber,
  style=numeric,
  sorting=ydnt,   % year descending, name, title
  maxbibnames=10, % avoid "et al." too early
]{biblatex}
\renewbibmacro{in:}{}
\DeclareFieldFormat{url}{\url{#1}}



\usepackage[left=0.6in,top=0.6in,right=0.6in,bottom=0.6in]{geometry}
\usepackage[dvipsnames]{xcolor}
\usepackage{fontspec}
\newfontface\headingfont{Sitka(SitkaHeading)}
\newfontface\boldfont{Open Sans}[
  RawFeature={+axis={wght=700}}
]

\newcommand{\bold}[1]{\boldfont{#1}\normalfont}

\setmainfont{Open Sans}[
    UprightFeatures      = {RawFeature={axis={wght=400}}},
    BoldFeatures         = {RawFeature={axis={wght=700}}},
    ItalicFeatures       = {RawFeature={axis={wght=400, ital=1}}},
    BoldItalicFeatures   = {RawFeature={axis={wght=700, ital=1}}},
]


\definecolor{Navy}{HTML}{1B192E}
\definecolor{Accent}{HTML}{7771B2}

\usepackage[colorlinks=true, urlcolor=Accent]{hyperref}



\titleformat{\section}% sectioning command formatted
             {\LARGE \headingfont \color{Navy!90}}% font commands 
             {}% label
             {0em}% separation between label and title
             {{#1}~\sout{\hfill}}% before section title

%\titlespacing{\section}{0pt}{\bigskipamount}{\medskipamount}

