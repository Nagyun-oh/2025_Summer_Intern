# [Clone]

**해당 문서는 Raccoon의 테스트 예제 설명 문서입니다.**

---

#### [하드웨어 설명](https://github.com/RoboidStudioLAB/Wiki_Image/wiki/%EB%9D%BC%EC%BF%A4-%ED%95%98%EB%93%9C%EC%9B%A8%EC%96%B4-%EC%84%A4%EB%AA%85)

#### [블록 컴포저 바로가기]( https://robomationlab.com/BlockComposer/ )
  
#### [로보메이션 깃허브 바로가기](https://github.com/RobomationLAB)

#### [초보자를 위한 블록컴포저 환경설정 가이드](https://github.com/RoboidStudioLAB/Wiki_Image/wiki/%EB%B8%94%EB%A1%9D%EC%BB%B4%ED%8F%AC%EC%A0%80-%ED%99%98%EA%B2%BD-%EC%84%A4%EC%A0%95-%EA%B0%80%EC%9D%B4%EB%93%9C)
<br>

---

<img width="400" height ="300"  alt="라쿤 따라하기" src="https://github.com/user-attachments/assets/887af65e-e152-46f5-91c2-1885a71f3d78" />


<img width="400" height ="300"  alt="라쿤 따라하기" src="https://github.com/user-attachments/assets/0c51227d-5e46-4787-9274-9f81a2c467e7" />


**이 예제는 라쿤 [0] 을 움직이면, 이에 맞게 라쿤 [1] 이 동작하는 예제입니다.**


  
<br><br>

---

## 1. 준비물
[*예제 파일 다운로드*](https://www.dropbox.com/scl/fi/o26c5xjwl0fmtpzfn3ytt/Raccoon_Clone.block?rlkey=betfx6wxjzhw7xjh6t352fegx&st=r8a0v1em&dl=0)
   | 제품명(수량) | 이미지 | 제품명(수량) | 이미지 | 
   | :---: | :---: | :---: | :---: |
   | 라쿤(5대 ) |  <img width="200" alt="Image" src="https://github.com/user-attachments/assets/6aed75da-3092-4295-9ef7-e8956efa5bae" /> | USB동글<br> ( 5개 ) | <img width="200" alt="Image" src="https://github.com/user-attachments/assets/fa6cd2c0-6b81-4f6f-bdc1-1d644c025d83" />
  
<br><br>


---


## 2. 초기 환경 구성
- 라쿤 2대를 준비합니다. (**라쿤 [0] : Master , 라쿤 [1] : Slave**)
- Block Composer에서 소스코드를 불러온 뒤, 로봇과 연결해줍니다.
- Slave가 Master의 움직임을 따라가지 못한다면, Master를 움직여서 Slave의 엔코더값에 맞춰주세요.

<br><br>


---


## 3. 작동하기

<br>

- 라쿤 2대를 Block Composer와 연결해줍니다.

  <img width="112" height="172" alt="image" src="https://github.com/user-attachments/assets/7ca8e315-f213-4367-9b81-27cc67aa98fc" />


<br><br>

- 돋보기 기능을 사용하여, **라쿤 [0]** / **라쿤 [1]** 을 구분해주세요.

  <img width="554" height="330" alt="image" src="https://github.com/user-attachments/assets/1d426999-c9a4-490c-89de-93898c9381b4" />


<br><br>

- 코드 실행을 누른 뒤, **라쿤 [0]** 을 조작해주세요.

  <img width="540" height="487" alt="image" src="https://github.com/user-attachments/assets/4508592e-f0f4-41bb-9ae0-9e464c743a4a" />


<br><br>

---


## 4. 오류 발생시 해결 방법
- **라쿤 [0]** 을 너무 빠르게 동작 시킬 경우, 라쿤1이 움직임을 따라가지 못할 수 있습니다.
- **라쿤 [1]** 이 **라쿤 [0]** 의 관절 움직임을 따라가지 못하는 경우, 손으로 조작하는 **라쿤 [0]** 의 엔코더 값을 **라쿤1** 에 맞춰주세요.

<br><br>


---


## 5. 작동 알고리즘



<details>
<summary> Flow Chart </summary>

<br>

<img width="762" height="642" alt="image" src="https://github.com/user-attachments/assets/da793005-dee0-4dfe-bbf1-38135bf14a94" />

</details>



<details>
<summary> 버튼 Event </summary>

<br>

| Event        | video                                    | description |
| ---------------- | ---------------------------------------------- | ------------------ |
| power 버튼 |<img width="500" height ="300"  alt="라쿤 따라하기" src="https://github.com/user-attachments/assets/71503d3c-547c-4918-8c53-c977205a1705" /> | power 버튼 클릭 시, home 상태로 초기화됩니다. |
| play 버튼 | <img width="500" height ="300"  alt="라쿤 따라하기" src="https://github.com/user-attachments/assets/46762d1f-99fc-4863-8e15-382cd043d27b" /> | play 버튼 클릭 시, 말단 장치 고정을 수평 / 수직으로 설정합니다. | 
| erase 버튼 |<img width="500" height ="300"  alt="라쿤 따라하기" src="https://github.com/user-attachments/assets/ddb47757-ad23-45e1-b95b-ef3ab13a8231" />| play 버튼 클릭 이후 관절4는 수평 / 수직으로 고정되어 움직이지 않습니다. 이럴 때는 erase버튼을 눌러서 말단 장치 고정을 안함으로 설정합니다.
| pick 버튼 |<img width="500" height ="300"  alt="라쿤 따라하기" src="https://github.com/user-attachments/assets/8565d47d-b4b1-4257-9f9b-6f91dd066589" />| pick 버튼 클릭 시, 말단 장치로 사물 잡기 / 놓기를 수행합니다.
  
</details>



<br><br>


---


## 6. 코드 설명


<details>
<summary> 시작하기 </summary>

<br>

**시작하기에서는 버튼 Event를 처리합니다.**

<img width="397" height="317" alt="image" src="https://github.com/user-attachments/assets/42bacc32-f718-4ca5-886e-58ab3636eb01" />
</details>

<details>
<summary>기본 설정 함수</summary>

<br>

**라쿤 [0] / 라쿤 [1] 의 제어 모드를 설정합니다.**

<img width="356" height="173" alt="image" src="https://github.com/user-attachments/assets/0fd2a442-a7e3-4e80-b7a3-9300ed7573f6" />

<br>

**버튼 Event에 사용되는 변수를 0으로 초기화합니다.**

<img width="356" height="173" alt="image" src="https://github.com/user-attachments/assets/31e7af5e-bc85-45af-b2b2-adb0b39b816d" />


</details>

<details>
<summary>Button Event 함수</summary>

<br>

**power 버튼 클릭 시,  home상태로 초기화**

<img width="617" height="307" alt="image" src="https://github.com/user-attachments/assets/74d12dbe-5092-4c80-b377-558a827acc3e" />

<br><br>

**play 버튼 클릭 시, 말단 장치 고정을 수직 / 수평으로 설정**

<img width="627" height="801" alt="image" src="https://github.com/user-attachments/assets/41867054-0fdc-4e7b-be7a-61a6436b3de3" />

<br><br>

**erase 버튼 클릭 시, 말단 장치 고정을 안함으로 설정**

<img width="632" height="544" alt="image" src="https://github.com/user-attachments/assets/93cbd7e1-b70e-4c3e-8513-d39bec28bc33" />

<br><br>

**pick 버튼 클릭 시, 말단 장치로 잡기 / 놓기 수행**

<img width="642" height="626" alt="image" src="https://github.com/user-attachments/assets/6c41bf27-2c80-415b-8d15-fe2897983230" />

<br><br>

</details>

<details>
<summary>제어기 함수</summary>

<br>

**P 제어 개념을 사용하여, 동작시키는 함수**

<img width="800" alt="image" src="https://github.com/user-attachments/assets/9c556fa1-f2de-4205-9f1d-7472f0f32c08" />

<br><br>

**P 제어 & 무한 반복하기에서 과도한 패킷 전송 방지 버전**

<img width="800" alt="image" src="https://github.com/user-attachments/assets/93c2cc48-6389-4bde-9e74-c2bd49a0a178" />

<br><br>

**PI 제어 개념을 사용하여, 동작시키는 함수**

<img width="800" alt="image" src="https://github.com/user-attachments/assets/eb0b15cd-b443-4eca-9b5b-055caa1c0229" />

<br><br>

**PID 제어 개념을 사용하여, 동작시키는 함수**

<img width="800"  alt="image" src="https://github.com/user-attachments/assets/9a1c8d8e-7ca1-4e5c-8dab-522ffd5ea10b" />


<br><br>

</details>

<details>
<summary> 주석 </summary>

<img width="560" height="1167" alt="image" src="https://github.com/user-attachments/assets/ebbfd1a7-a77b-4a5b-b41b-a7a4b040c621" />

</details>

<br><br>

***

<br>





## 7. 관련 내용
- [P제어](https://github.com/RoboidStudioLAB/Wiki_Image/wiki/P-%EC%A0%9C%EC%96%B4(%EB%B9%84%EB%A1%80-%EC%A0%9C%EC%96%B4))   


<br>

<img width="10000000" alt="Image" src="https://github.com/user-attachments/assets/aececf51-c059-4081-9fa8-87de0162b0b0" />

<br><br>
