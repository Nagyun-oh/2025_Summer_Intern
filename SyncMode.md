# [라쿤 5대 동기화 움직임]


**해당 문서는 Raccoon의 테스트 예제 설명 문서입니다.**

---

#### [하드웨어 설명](https://github.com/RoboidStudioLAB/Wiki_Image/wiki/%EB%9D%BC%EC%BF%A4-%ED%95%98%EB%93%9C%EC%9B%A8%EC%96%B4-%EC%84%A4%EB%AA%85)

#### [블록 컴포저 바로가기](https://robomationlab.com/BlockComposer/)
  
#### [로보메이션 깃허브 바로가기](https://github.com/RobomationLAB)

#### [초보자를 위한 블록컴포저 환경설정 가이드](https://github.com/RoboidStudioLAB/Wiki_Image/wiki/%EB%B8%94%EB%A1%9D%EC%BB%B4%ED%8F%AC%EC%A0%80-%ED%99%98%EA%B2%BD-%EC%84%A4%EC%A0%95-%EA%B0%80%EC%9D%B4%EB%93%9C)

---


***해당 예제는 라쿤 5대를 사용하여, 임의로 설정된 동작을 수행하는 예제입니다.***

  ![0825 (2)(1)](https://github.com/user-attachments/assets/e4258244-a938-4234-827e-07df165ae668)

<br><br>


---


## 1. 준비물

[*예제 파일 다운로드*](https://www.dropbox.com/scl/fi/fuu7v1l3wt0wlca8uk0ei/Raccoon_Move_Five.block?rlkey=5eazhujbgl2gdworaco5m1iny&st=3tq1tjyh&dl=0)

   | 제품명(수량) | 이미지 | 제품명(수량) | 이미지 | 
   | :---: | :---: | :---: | :---: |
   | 라쿤 (5대 ) |  <img width="200" alt="Image" src="https://github.com/user-attachments/assets/6aed75da-3092-4295-9ef7-e8956efa5bae" /> | USB동글<br> ( 5개 ) | <img width="200" alt="Image" src="https://github.com/user-attachments/assets/fa6cd2c0-6b81-4f6f-bdc1-1d644c025d83" />





  

<br><br>


---


## 2. 초기 환경 구성
- 라쿤 5개를 사진과 같이 **나란히** 놓습니다. 라쿤을 **바라보는** 기준으로 **왼쪽**부터 **0**번입니다.

<img width="1062" height="634" alt="image" src="https://github.com/user-attachments/assets/98f98e83-7e3a-490b-9272-235f5bd44548" />



<br><br>


---


## 3. 작동하기

<br>

- 블록 컴포저에서 **로봇 선택**을 통해, 라쿤을 **5**개 추가합니다.

<img width="96" height="445" alt="image" src="https://github.com/user-attachments/assets/814be3c4-4d0b-4158-b275-2e84bd946bc2" />


<br><br>


- **돋보기** 기능을 사용하여, 라쿤 0 ~ 4의 **순서에 맞게** 배치합니다.

<img width="582" height="252" alt="image" src="https://github.com/user-attachments/assets/110f3c02-bd99-4e14-934d-8fe70eca888e" />



<br><br>


---


## 4. 오류 발생시 해결 방법


동글의 연결이 끊길 시, 동글과 라쿤 연결의 순서가 뒤바뀔 수 있습니다.

해당 문제 발생 시에는 라쿤 [0] - 라쿤 [1] - 라쿤 [2] - 라쿤 [3] - 라쿤 [4]를 순서에 맞게 재배치 해주세요.

<br>

***연결할 때 문제가 발생한다면, 동글이 모두 연결되었는지 확인해주세요.***

<img width="435" height="454" alt="image" src="https://github.com/user-attachments/assets/b7cf696a-50d2-4d3e-9625-d96ffd59c316" />



<br><br>


---


## 5. 작동 알고리즘

<details>
<summary>알고리즘 개요</summary>

- 해당 예제에서 테스트 하는 것은 크게 2가지입니다.

- 첫 번째로 **시작하기**에서만 라쿤 5대를 동작 시킵니다.

- 두 번째로는 **시작하기**와 **무한 반복하기**에서 라쿤 5대를 동작 시킵니다. (시작하기에서는 라쿤0 , 무한 반복하기에서는 라쿤1 ~ 라쿤4)

</details>

<details>
<summary>Flow chart</summary>

<img width="1134" height="1115" alt="image" src="https://github.com/user-attachments/assets/bb3e7a8d-d561-47c9-9f92-a58e665059f7" />

</details>

<br><br>


---

## 6. 코드 설명

***해당 예제는 여러 대의 라쿤에 대해서, (시작하기 & 무한 반복하기에서 동작) 또는 시작하기에서만 동작하는 것을 테스트 하는 예제입니다.***


<details>
<summary>기본 설정함수</summary>

<br>

**setup()**

- 시작하기에서, 작성된 함수를 호출하여 지정한 순서대로 동작하게 합니다.

  <img width="279" height="518" alt="image" src="https://github.com/user-attachments/assets/991113af-60f5-4094-a079-ffde1b1a3750" />  
  

<br><br>

**init_set()**

- 라쿤 0~4를 각도 제어 모드로 설정하고, 최대 관절 각도 제어 속도를 지정합니다.  

  <img width="416" height="387" alt="image" src="https://github.com/user-attachments/assets/d5cbea1e-f94d-46c6-b65e-14c883c05c55" />  


<br><br>

**Init_list()**

- 배열(array)에 설정값을 반영합니다.

  <img width="320" height="171" alt="image" src="https://github.com/user-attachments/assets/56c575f3-81f8-441b-8ebd-7ca075cdc432" />  


<br><br>

</details>


<details>
<summary>시작하기 & 무한 반복하기에서 동작</summary>

<br>

**Init_loop_var()**

- 시작하기와 무한 반복하기를 이어주는 Flag를 설정합니다.

  <img width="310" height="136" alt="image" src="https://github.com/user-attachments/assets/0759f1da-d4a4-435b-9d88-d9b7710e39b6" />  
 

<br><br>

**Small_Wave1()** 

- set = 3
- 라쿤 0 ~ 4 가 시작하기 & 무한 반복하기에서 동기화되는 함수입니다.

  <img width="1212" height="381" alt="image" src="https://github.com/user-attachments/assets/0a462331-0576-484d-a20e-da588e8ae0c8" />


<br><br>

**Small_Wave2()**

- set = 4
- 라쿤 0 ~ 4 가 시작하기 & 무한 반복하기에서 동기화되는 함수입니다.

  <img width="1192" height="383" alt="image" src="https://github.com/user-attachments/assets/ce2e9e1b-d750-4520-b88a-a10b064a7acd" />


<br><br>


**Init_Wave_A()**  

- set = 0
- 라쿤 0 ~ 4 가 시작하기 & 무한 반복하기에서 동기화되는 함수입니다.
- 라쿤 0 ~ 4 -> 파도 타기 1

  <img width="940" height="350" alt="image" src="https://github.com/user-attachments/assets/818b0796-a818-40ad-8173-b78d9127930d" />


<br><br>

**Increase_A()** 

- set = 1
- 라쿤 0 ~ 4 가 시작하기 & 무한 반복하기에서 동기화되는 함수입니다.
- 파도 타기 2

  <img width="1269" height="844" alt="image" src="https://github.com/user-attachments/assets/dffbae16-9275-4f12-a7fa-76045740b374" />


<br><br>

**Decrease_A()**

- set = 2
- 라쿤 0 ~ 4 가 시작하기 & 무한 반복하기에서 동기화되는 함수입니다.
- 파도 타기 3

  <img width="1285" height="674" alt="image" src="https://github.com/user-attachments/assets/98efe131-fe12-4cde-8d20-26f4507a133f" />


<br><br>

</details>



<details>
<summary>시작하기에서만 동작</summary>

<br>

**five()**

- 입력받은 five_array(관절 각도 배열)를 모든 로봇팔에 동일하게 적용.
- ACT_2()에서 라쿤 0~4의 배열을 설정합니다.

  <img width="454" height="229" alt="image" src="https://github.com/user-attachments/assets/33b45a40-d352-43e3-8738-80004118fe65" />


<br><br>

**release()**

- 라쿤 0~4 그리퍼를 해제합니다.

  <img width="266" height="171" alt="image" src="https://github.com/user-attachments/assets/0c9c6139-3881-49bb-a1fd-9470c6fb7b5c" />


<br><br>

**Home()**

- 모든 로봇팔을 [0,-10,-140,60] 각도로 이동 ( home 상태로 초기화 ) 

  <img width="494" height="203" alt="image" src="https://github.com/user-attachments/assets/208bc84f-8133-4a2f-9ffe-b22c1d0c6be3" />


<br><br>

**Zero()**

- 모든 로봇팔을 [0,0,-90,0] 각도로 이동 ( zero 상태로 초기화 ) 

  <img width="470" height="199" alt="image" src="https://github.com/user-attachments/assets/e188bc94-83c4-4d12-85fa-e4e101b6202a" />


<br><br>

**ACT_1()**

- 라쿤 0~4를 각각 동작시키는 함수입니다.
- 5 개 로봇팔이 교차하며 번갈아 전진/후퇴하는 파동 동작 수행.
- 이후에는 End Effector를 켜고/끄며 동작.

  <img width="1035" height="819" alt="image" src="https://github.com/user-attachments/assets/4c3efcce-6938-4c46-a365-18a239715f99" />


<br><br>

**ACT_2()**

- 라쿤 0~4를 각각 동작시키는 함수입니다.
- 로봇팔들을 특정 자세([0,-40,-105,60])로 모아놓고, 순서대로 잡았다가 놓는 동작 수행.

  <img width="490" height="847" alt="image" src="https://github.com/user-attachments/assets/9718d52d-c463-41ac-9c56-f953e1e32235" />


<br><br>

**ACT_3()**

- 라쿤 0~4를 각각 동작시키는 함수입니다.
- 처음에 모든 로봇팔이 물건을 잡은 상태로 [0,0,-90,0] 자세로 정렬.
- 이후 [0,-40,-105,60]으로 이동하면서 End Effector를 해제.
- 마지막에 소리를 재생

  <img width="508" height="768" alt="image" src="https://github.com/user-attachments/assets/566ddc32-9786-45cc-8f24-aa7659147cd3" />


<br><br>

**ACT_4()**

- 라쿤 0~4를 각각 동작시키는 함수입니다.
- 좌우로 크게 흔드는 동작.
- [55,0,-90,0] → [0,-40,-105,60] → [-55,0,-90,0] → [0,-40,-105,60] 반복.
- End Effector(집게) 열고 닫으며 동작.

  <img width="505" height="1155" alt="image" src="https://github.com/user-attachments/assets/b75449bc-d314-4e4f-8271-43e64f668bba" />


<br><br>

**ACT_5()**

- 라쿤 0~4를 각각 동작시키는 함수입니다.
- 처음에 [0,0,-135,-45] 로 다섯 로봇 정렬.
- End Effector 모두 닫기 → 다시 [0,0,-90,0] 자세로 복귀.
- End Effector 모두 해제(열기).
- 일종의 잡았다가 풀며 원위치하는 동작.

  <img width="494" height="668" alt="image" src="https://github.com/user-attachments/assets/a25cd841-c56b-4544-b55b-f092fe7eeed2" />


<br><br>

**Finsh()**

- 마지막 동작을 수행하고, 20초 대기 후 종료합니다.
- 로봇팔들을 좌우로 벌렸다가 다시 모으는 동작 수행.
- 마지막에 대각선 형태로 정렬([ -30,-40,-105,60 ] ~ [30,-40,-105,60]).

  <img width="996" height="695" alt="image" src="https://github.com/user-attachments/assets/b71ebf2d-c63f-45c8-9e8e-dfaf884bae8a" />


<br><br>

</details>

<details>
<summary>주석</summary>

  <img width="446" height="1109" alt="image" src="https://github.com/user-attachments/assets/1f34f232-51be-4943-8282-647d0f93ffcb" />


</details>

<br><br>

---


## 7. 관련 내용
- 내용에 사용된 이론에 대해서 소개하는 란 입니다.  
- 개별 문서로 링크 걸기
<img width="10000000" alt="Image" src="https://github.com/user-attachments/assets/aa6d40b2-2d90-4a5e-90b4-1e3049b714db" />
