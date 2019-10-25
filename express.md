# Express(node.js)로 프로젝트를 시작하기

## 0. 본 문서의 코드에서 C:\> 는 커서(프롬프트)의 위치임.

## 1. express-generator를 사용하기
### . express-generator 가 설치되지 않았으면 터미널 창을 열고 아래와 같이 설치를 한다.
~~~bash
C:\> npm i -g express-generator
~~~
### . express-generator 가 설치되어 있다면 프로젝트를 시작할 폴더를 생성할 폴더로 이동(터미널 창에서)하여 아래의 명령을 실행한다.
(예: D드라이브의 projects 폴더에 myapp이라는 프로젝트 폴더를 생성할 때  D:/projects/myapp)
~~~
C:\> d:
D:\> cd projects
D:\projects> express --view=pug myapp
~~~
### . 위와 같이 실행하고 나면 myapp 프로젝트가 생성이 되고 프로젝트를 시작할 준비가 완료된다.


## 2. npm 으로 프로젝트를 시작할 때
### . 탐색기에서 프로젝트 폴더를 생성하고(예: d:\projects\myapp)사용하는 에디터에서 폴더를 열고 터미널 창을 실행하여 아래와 같이 실행한다.
~~~
D:\projects\myapp> npm init -y
D:\projects\myapp> npm i express
~~~

### . package.json 파일이 생성이 되면 프로젝트 루트에 [**.gitignore**] 를 생성한다.
~~~js
node_modules
package-lock.json
mysql_conn.js //데이터베이스 id, pw 가 포함되어 있으므로 git에 올리면 안됨.
~~~

### . 프로젝트 루트에 public, modules, views 폴더를 생성하고 프로젝트를 시작한다.

