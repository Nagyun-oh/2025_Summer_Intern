var diff1, integral1, prev_diff1, diff2, Grab_or_Drop, integral2, prev_diff2, diff3, vertical_var, integral3, prev_diff3, diff4, integral4, prev_diff4, Kp, Positive_Boundary, Racoon_0, Speed_ary, Negative_Boundary, Ki, Kd, condition1, condition2, condition3, condition4, derivative1, derivative2, derivative3, derivative4;

// 이 함수를 설명하세요...
function Init_Var() {
  // Grab_or_Drop = 0  (Grab_Drop함수에서 쓰일 변수 초기화)
  // vertical_var = 0 ( Vertical함수에서 쓰일 변수 초기화)
  Grab_or_Drop = 0;
  vertical_var = 0;
}

// 이 함수를 설명하세요...
function Init_PID_control_Var() {
  // 이전 오차 초기화
  prev_diff1 = 0;
  prev_diff2 = 0;
  prev_diff3 = 0;
  prev_diff4 = 0;
}

// 이 함수를 설명하세요...
function Init_PI_Control_Var() {
  // 적분 항 누적변수 초기화
  integral1 = 0;
  integral2 = 0;
  integral3 = 0;
  integral4 = 0;
}

// 이 함수를 설명하세요...
async function Grab_Drop() {
  // pick 버튼을 누를 시 , grab / drop
  if ($('Raccoon4*0:button.pressed.pick').d) {
    if (Grab_or_Drop % 2 === 0) {
      // count == 짝수
      $('Raccoon4*0:end_effector.control').d = 1;
      $('Raccoon4*1:end_effector.control').d = 1;
    } else {
      // count == 홀수
      $('Raccoon4*0:end_effector.control').d = 0;
      $('Raccoon4*1:end_effector.control').d = 0;
    }
    // 원활한 동작을 위해 기다리기 수행
    $('Raccoon4*0:mode').d = 1;
    $('Raccoon4*0:angle.joints').d = [$('Raccoon4*0:encoder.joint_1').d, $('Raccoon4*0:encoder.joint_2').d, $('Raccoon4*0:encoder.joint_3').d, $('Raccoon4*0:encoder.joint_4').d];
    $('Raccoon4*1:mode').d = 1;
    $('Raccoon4*1:angle.joints').d = [$('Raccoon4*1:encoder.joint_1').d, $('Raccoon4*1:encoder.joint_2').d, $('Raccoon4*1:encoder.joint_3').d, $('Raccoon4*1:encoder.joint_4').d];
    Racoon_0 = [$('Raccoon4*0:encoder.joint_1').d, $('Raccoon4*0:encoder.joint_2').d, $('Raccoon4*0:encoder.joint_3').d, $('Raccoon4*0:encoder.joint_4').d];
    $('Raccoon4*1:sound.clip').d = 1;
    await $('Raccoon4*1:sound.!clip').w();
    Grab_or_Drop = (typeof Grab_or_Drop === 'number' ? Grab_or_Drop : 0) + 1;
  }
}

// 이 함수를 설명하세요...
function Set2() {
  // 라쿤0 과 라쿤1 기본 세팅
  $('Raccoon4*0:motor_off.joint_1').d = 1;  // 끄기
  $('Raccoon4*0:motor_off.joint_2').d = 1;  // 끄기
  $('Raccoon4*0:motor_off.joint_3').d = 1;  // 끄기
  $('Raccoon4*0:motor_off.joint_4').d = 1;  // 끄기
  $('Raccoon4*0:mode').d = 0;
  $('Raccoon4*1:mode').d = 0;
}

// 이 함수를 설명하세요...
async function Home() {
  // power 버튼을 눌러서 home상태로 초기화
  if ($('Raccoon4*0:button.pressed.power').d) {
    $('Raccoon4*0:motor_off.joint_1').d = 0;  // 켜기
    $('Raccoon4*0:motor_off.joint_2').d = 0;  // 켜기
    $('Raccoon4*0:motor_off.joint_3').d = 0;  // 켜기
    $('Raccoon4*0:motor_off.joint_4').d = 0;  // 켜기
    $('Raccoon4*0:mode').d = 1;
    $('Raccoon4*0:angle.joints').d = [$('Raccoon4*0:encoder.joint_1').d, $('Raccoon4*0:encoder.joint_2').d, $('Raccoon4*0:encoder.joint_3').d, $('Raccoon4*0:encoder.joint_4').d];
    $('Raccoon4*1:mode').d = 1;
    $('Raccoon4*1:angle.joints').d = [$('Raccoon4*1:encoder.joint_1').d, $('Raccoon4*1:encoder.joint_2').d, $('Raccoon4*1:encoder.joint_3').d, $('Raccoon4*1:encoder.joint_4').d];
    $('Raccoon4*0:sound.clip').d = 3;
    $('Raccoon4*0:angle.joints').d = [0,-10,-140,60];
    $('Raccoon4*1:angle.joints').d = [0,-10,-140,60];
    await $('Raccoon4*1:angle.!joints').w();
  }
}

// 이 함수를 설명하세요...
async function release() {
  // erase 버튼 누를 시, 말단 장치 고정을 안함으로 설정
  if ($('Raccoon4*0:button.pressed.erase').d) {
    $('Raccoon4*0:end_effector.lock').d = 0;
    $('Raccoon4*1:end_effector.lock').d = 0;
    $('Raccoon4*0:sound.clip').d = 7;
    $('Raccoon4*1:sound.clip').d = 7;
    await $('Raccoon4*1:sound.!clip').w();
    // 원활한 동작을 위해 기다리기 수행
    $('Raccoon4*0:mode').d = 1;
    $('Raccoon4*0:angle.joints').d = [$('Raccoon4*0:encoder.joint_1').d, $('Raccoon4*0:encoder.joint_2').d, $('Raccoon4*0:encoder.joint_3').d, $('Raccoon4*0:encoder.joint_4').d];
    $('Raccoon4*1:mode').d = 1;
    $('Raccoon4*1:angle.joints').d = [$('Raccoon4*1:encoder.joint_1').d, $('Raccoon4*1:encoder.joint_2').d, $('Raccoon4*1:encoder.joint_3').d, $('Raccoon4*1:encoder.joint_4').d];
    Racoon_0 = [$('Raccoon4*0:encoder.joint_1').d, $('Raccoon4*0:encoder.joint_2').d, $('Raccoon4*0:encoder.joint_3').d, $('Raccoon4*0:encoder.joint_4').d];
    $('Raccoon4*0:angle.joints').d = Racoon_0;
    $('Raccoon4*1:angle.joints').d = Racoon_0;
    await $('Raccoon4*1:angle.!joints').w();
    vertical_var = (typeof vertical_var === 'number' ? vertical_var : 0) + 1;
  }
}

// 이 함수를 설명하세요...
async function Vertical() {
  // play 버튼을 누를 시, 말단 장치 고정을 수직/ 수평으로 설정
  if ($('Raccoon4*0:button.pressed.play').d) {
    $('Raccoon4*0:motor_off.joint_1').d = 0;  // 켜기
    $('Raccoon4*0:motor_off.joint_2').d = 0;  // 켜기
    $('Raccoon4*0:motor_off.joint_3').d = 0;  // 켜기
    $('Raccoon4*0:motor_off.joint_4').d = 0;  // 켜기
    if (vertical_var % 2 === 0) {
      // count == 짝수
      $('Raccoon4*0:end_effector.lock').d = 2;
      $('Raccoon4*1:end_effector.lock').d = 2;
      $('Raccoon4*0:sound.clip').d = 2;
      $('Raccoon4*1:sound.clip').d = 2;
      await $('Raccoon4*1:sound.!clip').w();
    } else {
      // count == 홀수
      $('Raccoon4*0:end_effector.lock').d = 1;
      $('Raccoon4*1:end_effector.lock').d = 1;
      $('Raccoon4*0:sound.clip').d = 2;
      $('Raccoon4*1:sound.clip').d = 2;
      await $('Raccoon4*1:sound.!clip').w();
    }
    // 원활한 동작을 위해 기다리기 수행
    $('Raccoon4*0:mode').d = 1;
    $('Raccoon4*0:angle.joints').d = [$('Raccoon4*0:encoder.joint_1').d, $('Raccoon4*0:encoder.joint_2').d, $('Raccoon4*0:encoder.joint_3').d, $('Raccoon4*0:encoder.joint_4').d];
    $('Raccoon4*1:mode').d = 1;
    $('Raccoon4*1:angle.joints').d = [$('Raccoon4*1:encoder.joint_1').d, $('Raccoon4*1:encoder.joint_2').d, $('Raccoon4*1:encoder.joint_3').d, $('Raccoon4*1:encoder.joint_4').d];
    Racoon_0 = [$('Raccoon4*0:encoder.joint_1').d, $('Raccoon4*0:encoder.joint_2').d, $('Raccoon4*0:encoder.joint_3').d, $('Raccoon4*0:encoder.joint_4').d];
    $('Raccoon4*0:angle.joints').d = Racoon_0;
    $('Raccoon4*1:angle.joints').d = Racoon_0;
    await $('Raccoon4*1:angle.!joints').w();
    vertical_var = (typeof vertical_var === 'number' ? vertical_var : 0) + 1;
  }
}

// p제어 : 오차에 비례
function P_Control() {
  // P제어 : 목표값 - 실제값 ( 오차 계산 )
  diff1 = ($('Raccoon4*0:encoder.joint_1').d) - ($('Raccoon4*1:encoder.joint_1').d);
  diff2 = ($('Raccoon4*0:encoder.joint_2').d) - ($('Raccoon4*1:encoder.joint_2').d);
  diff3 = ($('Raccoon4*0:encoder.joint_3').d) - ($('Raccoon4*1:encoder.joint_3').d);
  diff4 = ($('Raccoon4*0:encoder.joint_4').d) - ($('Raccoon4*1:encoder.joint_4').d);
  Kp = 16;
  Speed_ary = [Math.min(Math.max(Kp * diff1, -100), 100), Math.min(Math.max(Kp * diff2, -100), 100), Math.min(Math.max(Kp * diff3, -100), 100), Math.min(Math.max(Kp * diff4, -100), 100)];
  $('Raccoon4*1:speed.joint_1').d = (Array.isArray(Speed_ary) && Speed_ary[0]) ? Speed_ary[0] : 0;
  $('Raccoon4*1:speed.joint_2').d = (Array.isArray(Speed_ary) && Speed_ary[1]) ? Speed_ary[1] : 0;
  $('Raccoon4*1:speed.joint_3').d = (Array.isArray(Speed_ary) && Speed_ary[2]) ? Speed_ary[2] : 0;
  $('Raccoon4*1:speed.joint_4').d = (Array.isArray(Speed_ary) && Speed_ary[3]) ? Speed_ary[3] : 0;
}

// PI제어 : 오차 + 누적오차
function PI_Control() {
  // 오차 계산
  diff1 = ($('Raccoon4*0:encoder.joint_1').d) - ($('Raccoon4*1:encoder.joint_1').d);
  diff2 = ($('Raccoon4*0:encoder.joint_2').d) - ($('Raccoon4*1:encoder.joint_2').d);
  diff3 = ($('Raccoon4*0:encoder.joint_3').d) - ($('Raccoon4*1:encoder.joint_3').d);
  diff4 = ($('Raccoon4*0:encoder.joint_4').d) - ($('Raccoon4*1:encoder.joint_4').d);
  // PI 제어 상수
  Kp = 16;
  Ki = 0.1;
  // 적분 항 누적
  integral1 = integral1 + diff1;
  integral2 = integral2 + diff2;
  integral3 = integral3 + diff3;
  integral4 = integral4 + diff4;
  // 제어 입력 계산
  Speed_ary = [Math.min(Math.max(Kp * diff1 + Ki * integral1, -100), 100), Math.min(Math.max(Kp * diff2 + Ki * integral2, -100), 100), Math.min(Math.max(Kp * diff3 + Ki * integral3, -100), 100), Math.min(Math.max(Kp * diff4 + Ki * integral4, -100), 100)];
  // Slave 제어 입력 반영
  $('Raccoon4*1:speed.joint_1').d = (Array.isArray(Speed_ary) && Speed_ary[0]) ? Speed_ary[0] : 0;
  $('Raccoon4*1:speed.joint_2').d = (Array.isArray(Speed_ary) && Speed_ary[1]) ? Speed_ary[1] : 0;
  $('Raccoon4*1:speed.joint_3').d = (Array.isArray(Speed_ary) && Speed_ary[2]) ? Speed_ary[2] : 0;
  $('Raccoon4*1:speed.joint_4').d = (Array.isArray(Speed_ary) && Speed_ary[3]) ? Speed_ary[3] : 0;
}

// p제어 : 오차에 비례
function P_Control_WithSolvePacket() {
  // P제어 : 목표값 - 실제값 ( 오차 계산 )
  diff1 = ($('Raccoon4*0:encoder.joint_1').d) - ($('Raccoon4*1:encoder.joint_1').d);
  diff2 = ($('Raccoon4*0:encoder.joint_2').d) - ($('Raccoon4*1:encoder.joint_2').d);
  diff3 = ($('Raccoon4*0:encoder.joint_3').d) - ($('Raccoon4*1:encoder.joint_3').d);
  diff4 = ($('Raccoon4*0:encoder.joint_4').d) - ($('Raccoon4*1:encoder.joint_4').d);
  // (라쿤0 엔코더 값 - 라쿤1 엔코더값) 움직임 감지 경계값 설정
  Positive_Boundary = 2;
  Negative_Boundary = -2;
  Kp = 16;
  // 무한반복하기에서 과도한 패킷전송을 방지하기 위해서
  // Master인 라쿤0 에 대하여, 관절1 / 관절2 / 관절3 / 관절4 움직였는지 확인
  condition1 = diff1 > Negative_Boundary && diff1 < Positive_Boundary;
  condition2 = diff2 > Negative_Boundary && diff2 < Positive_Boundary;
  condition3 = diff3 > Negative_Boundary && diff3 < Positive_Boundary;
  condition4 = diff4 > Negative_Boundary && diff4 < Positive_Boundary;
  Speed_ary = [Math.min(Math.max(Kp * diff1, -100), 100), Math.min(Math.max(Kp * diff2, -100), 100), Math.min(Math.max(Kp * diff3, -100), 100), Math.min(Math.max(Kp * diff4, -100), 100)];
  if (condition1 && condition2 && condition3 && condition4) {
    // 라쿤0 움직임이 없을 시, 속도를 0으로 설정
    $('Raccoon4*1:speed.joint_1').d = 0;
    $('Raccoon4*1:speed.joint_2').d = 0;
    $('Raccoon4*1:speed.joint_3').d = 0;
    $('Raccoon4*1:speed.joint_4').d = 0;
  } else {
    // 라쿤0 움직임이 있을 시, P제어를 통해서 움직임 제어
    $('Raccoon4*1:speed.joint_1').d = (Array.isArray(Speed_ary) && Speed_ary[0]) ? Speed_ary[0] : 0;
    $('Raccoon4*1:speed.joint_2').d = (Array.isArray(Speed_ary) && Speed_ary[1]) ? Speed_ary[1] : 0;
    $('Raccoon4*1:speed.joint_3').d = (Array.isArray(Speed_ary) && Speed_ary[2]) ? Speed_ary[2] : 0;
    $('Raccoon4*1:speed.joint_4').d = (Array.isArray(Speed_ary) && Speed_ary[3]) ? Speed_ary[3] : 0;
  }
}

// PID제어 : 오차 + 누적오차 + 오차 변화율
function PID_Control() {
  // 오차 계산
  diff1 = ($('Raccoon4*0:encoder.joint_1').d) - ($('Raccoon4*1:encoder.joint_1').d);
  diff2 = ($('Raccoon4*0:encoder.joint_2').d) - ($('Raccoon4*1:encoder.joint_2').d);
  diff3 = ($('Raccoon4*0:encoder.joint_3').d) - ($('Raccoon4*1:encoder.joint_3').d);
  diff4 = ($('Raccoon4*0:encoder.joint_4').d) - ($('Raccoon4*1:encoder.joint_4').d);
  // PID 상
  Kp = 16;
  Ki = 0.1;
  Kd = 2;
  // 적분 항 누적
  integral1 = integral1 + diff1;
  integral2 = integral2 + diff2;
  integral3 = integral3 + diff3;
  integral4 = integral4 + diff4;
  // 미분 항 ( 현재 오차 - 이전 오차)
  derivative1 = diff1 - prev_diff1;
  derivative2 = diff2 - prev_diff2;
  derivative3 = diff3 - prev_diff3;
  derivative4 = diff4 - prev_diff4;
  // 제어 입력 계산
  Speed_ary = [Math.min(Math.max(Kp * diff1 + Ki * integral1 + Kd * derivative1, -100), 100), Math.min(Math.max(Kp * diff2 + Ki * integral2 + Kd * derivative2, -100), 100), Math.min(Math.max(Kp * diff3 + Ki * integral3 + Kd * derivative3, -100), 100), Math.min(Math.max(Kp * diff4 + Ki * integral4 + Kd * derivative4, -100), 100)];
  // Slave 제어 입력 반영
  $('Raccoon4*1:speed.joint_1').d = (Array.isArray(Speed_ary) && Speed_ary[0]) ? Speed_ary[0] : 0;
  $('Raccoon4*1:speed.joint_2').d = (Array.isArray(Speed_ary) && Speed_ary[1]) ? Speed_ary[1] : 0;
  $('Raccoon4*1:speed.joint_3').d = (Array.isArray(Speed_ary) && Speed_ary[2]) ? Speed_ary[2] : 0;
  $('Raccoon4*1:speed.joint_4').d = (Array.isArray(Speed_ary) && Speed_ary[3]) ? Speed_ary[3] : 0;
  // 이전 오차 업데이트
  prev_diff1 = diff1;
  prev_diff2 = diff2;
  prev_diff3 = diff3;
  prev_diff4 = diff4;
}


// put setup code here, to run once:
async function setup() {
  Init_Var();
  Init_PI_Control_Var();
  Init_PID_control_Var();
  while(true) {
    Set2();
    await Grab_Drop();
    await Home();
    await release();
    await Vertical();
    await __wait(10);
  }
}

// put control code here, to run repeatedly:
function loop() {
  P_Control();
}

// @예제
// 해당 코드는 두 개의 라쿤 로봇을 활용한
// 마스터-슬레이브(Master-Slave) 예제입니다.

// 코드를 실행한 후 라쿤0을 손으로 조작하면,
// 라쿤1이 그 움직임을 따라 동기화되어 작동합니다.

// play 버튼 클릭 시 , 말단 장치 고정을 수직 / 수평으로 설정됩니다.
// erase 버튼 클릭 시, 말단 장치 고정을 안함으로 설정합니다.
// pick 버튼 클릭 시, 말단 장치로 잡기 / 놓기를 수행합니다.

// ! 패킷 문제 발생시 해결법
// power 버튼 클릭 -> home 상태로 초기화
// 라쿤0 을 움직여서, 라쿤1과 각도를 맞춘  후 다시 동작시키기

// 함수 설명
// set():
//     라쿤0 과 라쿤1 에 대하여, 라쿤0은 관절제어를 끄고,
//     라쿤1은 속도제어 모드로 설정합니다.

// Init_Var() :
//       Grab_Drop() , Vertical() 함수에서 사용되는 변수 초기화

// Init_PID_control_Var() :
//        PI 제어에서 사용되는 변수 초기화

// Init_PID_control_Var() :
//        PID 제어에서 사용되는 변수 초기화

// Vertical():
//     play 버튼을 누를 시, 말단 장치 고정을 수직 / 수평으로 설정하는 함수

// relase():
//     erase 버튼을 누를 시, 말단 장치 고정을 안함으로 설정하는 함수
// Grab_Drop():
//     라쿤0의 pick 버튼을 누를 시, 두 라쿤이 잡기/ 놓기를 수행합니다.

// P_Control():
//      라쿤0 / 라쿤1의 움직임을 속도 제어를 통해, 동기화 하는 함수입니다.
//      P제어를 통해, { P gain x (라쿤0 엔코더값 - 라쿤1 엔코더값)을
//      라쿤1에 전달해줄 속도로 정합니다.
//      또한 무한 반복하기문에서, 10ms 지연시간동안의 지속적인 패킷전송으로
//      인한 에러를 막기위해서 , 관절1 ~ 관절4 에대한 움직임을 감지하는 경계값을
//      설정하여  움직이지 않을 시, 라쿤1의 모든 관절 속도를 0 으로 정합니다.

// P_Control_WithSolvePacket() :
//      P 제어에서, 무한 반복하기에서 이루어지는 과도한 패킷전송 방지한 버전.

// PI_Control(): PI 제어를 이용하여, 움직임 제어하는 함수

// PID_Control(): PID 제어를 이용하여, 움직임 제어하는 함수
