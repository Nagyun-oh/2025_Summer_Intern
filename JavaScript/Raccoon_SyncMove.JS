var five_array, Grab_or_NoGrab, count, set, array, Moved, flag, joint1, joint2, joint3, joint4, prev_ary1, prev_ary2;

// 이 함수를 설명하세요...
async function Grip_Wave() {
  $('Raccoon4*0:end_effector.control').d = 1;
  await __wait(150);
  $('Raccoon4*1:end_effector.control').d = 1;
  await __wait(150);
  $('Raccoon4*2:end_effector.control').d = 1;
  await __wait(150);
  $('Raccoon4*3:end_effector.control').d = 1;
  await __wait(150);
  $('Raccoon4*4:end_effector.control').d = 1;
  await __wait(150);
  $('Raccoon4*4:end_effector.control').d = 0;
  await __wait(150);
  $('Raccoon4*3:end_effector.control').d = 0;
  await __wait(150);
  $('Raccoon4*2:end_effector.control').d = 0;
  await __wait(150);
  $('Raccoon4*1:end_effector.control').d = 0;
  await __wait(150);
  $('Raccoon4*0:end_effector.control').d = 0;
}

// 이 함수를 설명하세요...
function init_set() {
  // 리쿤 각도 제어모드 & 속도 설정
  $('Raccoon4*0:mode').d = 1;
  $('Raccoon4*0:angle.joints').d = [$('Raccoon4*0:encoder.joint_1').d, $('Raccoon4*0:encoder.joint_2').d, $('Raccoon4*0:encoder.joint_3').d, $('Raccoon4*0:encoder.joint_4').d];
  $('Raccoon4*1:mode').d = 1;
  $('Raccoon4*1:angle.joints').d = [$('Raccoon4*1:encoder.joint_1').d, $('Raccoon4*1:encoder.joint_2').d, $('Raccoon4*1:encoder.joint_3').d, $('Raccoon4*1:encoder.joint_4').d];
  $('Raccoon4*2:mode').d = 1;
  $('Raccoon4*2:angle.joints').d = [$('Raccoon4*2:encoder.joint_1').d, $('Raccoon4*2:encoder.joint_2').d, $('Raccoon4*2:encoder.joint_3').d, $('Raccoon4*2:encoder.joint_4').d];
  $('Raccoon4*3:mode').d = 1;
  $('Raccoon4*3:angle.joints').d = [$('Raccoon4*3:encoder.joint_1').d, $('Raccoon4*3:encoder.joint_2').d, $('Raccoon4*3:encoder.joint_3').d, $('Raccoon4*3:encoder.joint_4').d];
  $('Raccoon4*4:mode').d = 1;
  $('Raccoon4*4:angle.joints').d = [$('Raccoon4*4:encoder.joint_1').d, $('Raccoon4*4:encoder.joint_2').d, $('Raccoon4*4:encoder.joint_3').d, $('Raccoon4*4:encoder.joint_4').d];
  $('Raccoon4*0:angle.max_speed').d = 100;
  $('Raccoon4*1:angle.max_speed').d = 100;
  $('Raccoon4*2:angle.max_speed').d = 100;
  $('Raccoon4*3:angle.max_speed').d = 100;
  $('Raccoon4*4:angle.max_speed').d = 100;
}

// 이 함수를 설명하세요...
function Init_loop_var() {
  // 시작하기 와 무한반복하기를 잇는 변수 초기화
  Moved = false;
  flag = 1;
}

// 이 함수를 설명하세요...
async function Home() {
  $('Raccoon4*0:angle.joints').d = [0,-10,-140,60];
  $('Raccoon4*1:angle.joints').d = [0,-10,-140,60];
  $('Raccoon4*2:angle.joints').d = [0,-10,-140,60];
  $('Raccoon4*3:angle.joints').d = [0,-10,-140,60];
  $('Raccoon4*4:angle.joints').d = [0,-10,-140,60];
  await $('Raccoon4*4:angle.!joints').w();
}

// 이 함수를 설명하세요...
async function five(five_array) {
  $('Raccoon4*0:angle.joints').d = five_array;
  $('Raccoon4*1:angle.joints').d = five_array;
  $('Raccoon4*2:angle.joints').d = five_array;
  $('Raccoon4*3:angle.joints').d = five_array;
  $('Raccoon4*4:angle.joints').d = five_array;
  await $('Raccoon4*4:angle.!joints').w();
}

// 이 함수를 설명하세요...
async function release() {
  $('Raccoon4*0:end_effector.control').d = 0;
  $('Raccoon4*1:end_effector.control').d = 0;
  $('Raccoon4*2:end_effector.control').d = 0;
  $('Raccoon4*3:end_effector.control').d = 0;
  $('Raccoon4*4:end_effector.control').d = 0;
}

// 이 함수를 설명하세요...
function func() {
  if (set == 0) {
    // Init_Wave
    if (flag == 0 && Moved == false) {
      $('Raccoon4*1:angle.joints').d = array;
      $('Raccoon4*2:angle.joints').d = array;
      $('Raccoon4*3:angle.joints').d = array;
      $('Raccoon4*4:angle.joints').d = array;
      Moved = true;
    }
  }
  if (set == 1) {
    // Increase_A
    if (flag == 0 && Moved == false) {
      if (count == 1) {
        if (Grab_or_NoGrab % 2 === 1) {
          $('Raccoon4*0:end_effector.control').d = 1;
        }
        $('Raccoon4*0:angle.joints').d = array;
      } else if (count == 2) {
        if (Grab_or_NoGrab % 2 === 1) {
          $('Raccoon4*1:end_effector.control').d = 1;
        }
        $('Raccoon4*1:angle.joints').d = array;
      } else if (count == 3) {
        if (Grab_or_NoGrab % 2 === 1) {
          $('Raccoon4*2:end_effector.control').d = 1;
        }
        $('Raccoon4*2:angle.joints').d = array;
      } else if (count == 4) {
        if (Grab_or_NoGrab % 2 === 1) {
          $('Raccoon4*3:end_effector.control').d = 1;
        }
        $('Raccoon4*3:angle.joints').d = array;
      }
      Moved = true;
    }
  }
  if (set == 2) {
    // Decrease_A
    if (flag == 0 && Moved == false) {
      if (count == 3) {
        $('Raccoon4*1:end_effector.control').d = 0;
        $('Raccoon4*1:angle.joints').d = array;
      } else if (count == 4) {
        $('Raccoon4*2:end_effector.control').d = 0;
        $('Raccoon4*2:angle.joints').d = array;
      } else if (count == 5) {
        $('Raccoon4*3:end_effector.control').d = 0;
        $('Raccoon4*3:angle.joints').d = array;
      } else if (count == 6) {
        $('Raccoon4*4:end_effector.control').d = 0;
        $('Raccoon4*4:angle.joints').d = array;
      }
      Moved = true;
    }
  }
  if (set == 3) {
    // Small_Wave1
    if (flag == 0 && Moved == false) {
      $('Raccoon4*1:angle.joints').d = [0,0,-90,0];
      $('Raccoon4*2:angle.joints').d = [0,-50,-90,60];
      $('Raccoon4*3:angle.joints').d = [0,0,-90,0];
      $('Raccoon4*4:angle.joints').d = [0,-50,-90,60];
      Moved = true;
    }
  }
  if (set == 4) {
    // Small_Wave2
    if (flag == 0 && Moved == false) {
      $('Raccoon4*1:angle.joints').d = [0,-50,-90,60];
      $('Raccoon4*2:angle.joints').d = [0,0,-90,0];
      $('Raccoon4*3:angle.joints').d = [0,-50,-90,60];
      $('Raccoon4*4:angle.joints').d = [0,0,-90,0];
      Moved = true;
    }
  }
}

// 이 함수를 설명하세요...
async function Zero() {
  $('Raccoon4*0:angle.joints').d = [0,0,-90,0];
  $('Raccoon4*1:angle.joints').d = [0,0,-90,0];
  $('Raccoon4*2:angle.joints').d = [0,0,-90,0];
  $('Raccoon4*3:angle.joints').d = [0,0,-90,0];
  $('Raccoon4*4:angle.joints').d = [0,0,-90,0];
  await $('Raccoon4*4:angle.!joints').w();
}

// 이 함수를 설명하세요...
function init_list1() {
  // 관절 배열 초기화
  set = 0;
  joint1 = ($('Raccoon4*0:encoder.joint_1').d);
  joint2 = ($('Raccoon4*0:encoder.joint_2').d);
  joint3 = ($('Raccoon4*0:encoder.joint_3').d);
  joint4 = ($('Raccoon4*0:encoder.joint_4').d);
}

// 이 함수를 설명하세요...
async function ACT_1() {
  $('Raccoon4*0:angle.joints').d = [0,-60,-85,60];
  $('Raccoon4*1:angle.joints').d = [0,-60,-85,60];
  $('Raccoon4*2:angle.joints').d = [0,-60,-85,60];
  $('Raccoon4*3:angle.joints').d = [0,-60,-85,60];
  $('Raccoon4*4:angle.joints').d = [0,-60,-85,60];
  await $('Raccoon4*4:angle.!joints').w();
  $('Raccoon4*4:angle.joints').d = [0,-60,-85,60];
  await $('Raccoon4*4:angle.!joints').w();
  $('Raccoon4*0:angle.joints').d = [0,-20,-140,60];
  await __wait(500);
  $('Raccoon4*1:angle.joints').d = [0,-20,-140,60];
  await __wait(500);
  for (var count4 = 0; count4 < 4; count4++) {
    $('Raccoon4*2:angle.joints').d = [0,-20,-140,60];
    $('Raccoon4*0:angle.joints').d = [0,-60,-85,60];
    await __wait(500);
    $('Raccoon4*3:angle.joints').d = [0,-20,-140,60];
    $('Raccoon4*1:angle.joints').d = [0,-60,-85,60];
    await __wait(500);
    $('Raccoon4*4:angle.joints').d = [0,-20,-140,60];
    $('Raccoon4*2:angle.joints').d = [0,-60,-85,60];
    await __wait(500);
    $('Raccoon4*0:angle.joints').d = [0,-20,-140,60];
    $('Raccoon4*3:angle.joints').d = [0,-60,-85,60];
    await __wait(500);
    $('Raccoon4*1:angle.joints').d = [0,-20,-140,60];
    $('Raccoon4*4:angle.joints').d = [0,-60,-85,60];
    await __wait(500);
  }
  for (var count5 = 0; count5 < 4; count5++) {
    $('Raccoon4*2:angle.joints').d = [0,-20,-140,60];
    $('Raccoon4*2:end_effector.control').d = 0;
    $('Raccoon4*0:angle.joints').d = [0,-60,-85,60];
    $('Raccoon4*0:end_effector.control').d = 1;
    await __wait(500);
    $('Raccoon4*3:angle.joints').d = [0,-20,-140,60];
    $('Raccoon4*3:end_effector.control').d = 0;
    $('Raccoon4*1:angle.joints').d = [0,-60,-85,60];
    $('Raccoon4*1:end_effector.control').d = 1;
    await __wait(500);
    $('Raccoon4*4:angle.joints').d = [0,-20,-140,60];
    $('Raccoon4*4:end_effector.control').d = 0;
    $('Raccoon4*2:angle.joints').d = [0,-60,-85,60];
    $('Raccoon4*2:end_effector.control').d = 1;
    await __wait(500);
    $('Raccoon4*0:angle.joints').d = [0,-20,-140,60];
    $('Raccoon4*0:end_effector.control').d = 0;
    $('Raccoon4*3:angle.joints').d = [0,-60,-85,60];
    $('Raccoon4*3:end_effector.control').d = 1;
    await __wait(500);
    $('Raccoon4*1:angle.joints').d = [0,-20,-140,60];
    $('Raccoon4*1:end_effector.control').d = 0;
    $('Raccoon4*4:angle.joints').d = [0,-60,-85,60];
    $('Raccoon4*4:end_effector.control').d = 1;
    await __wait(500);
  }
  await release();
}

// 이 함수를 설명하세요...
async function ACT_2() {
  await five([ 0,-40,-105,60]);
  $('Raccoon4*0:end_effector.control').d = 1;
  await five([ 0,-40,-105,60]);
  $('Raccoon4*1:end_effector.control').d = 1;
  await five([ 0,-40,-105,60]);
  $('Raccoon4*2:end_effector.control').d = 1;
  await five([ 0,-40,-105,60]);
  $('Raccoon4*3:end_effector.control').d = 1;
  await five([ 0,-40,-105,60]);
  $('Raccoon4*4:end_effector.control').d = 1;
  await five([ 0,-40,-105,60]);
  $('Raccoon4*0:angle.joints').d = [-40,-10,-140,49];
  $('Raccoon4*1:angle.joints').d = [-20,-10,-140,49];
  $('Raccoon4*2:angle.joints').d = [0,-10,-140,49];
  $('Raccoon4*3:angle.joints').d = [20,-10,-140,49];
  $('Raccoon4*4:angle.joints').d = [40,-10,-140,49];
  $('Raccoon4*0:end_effector.control').d = 0;
  await __wait(250);
  $('Raccoon4*1:end_effector.control').d = 0;
  await __wait(250);
  $('Raccoon4*2:end_effector.control').d = 0;
  await __wait(250);
  $('Raccoon4*3:end_effector.control').d = 0;
  await __wait(250);
  $('Raccoon4*4:end_effector.control').d = 0;
  await __wait(500);
}

// 이 함수를 설명하세요...
async function ACT_3() {
  $('Raccoon4*0:end_effector.control').d = 1;
  $('Raccoon4*0:angle.joints').d = [0,0,-90,0];
  $('Raccoon4*1:end_effector.control').d = 1;
  $('Raccoon4*1:angle.joints').d = [0,0,-90,0];
  $('Raccoon4*2:end_effector.control').d = 1;
  $('Raccoon4*2:angle.joints').d = [0,0,-90,0];
  $('Raccoon4*3:end_effector.control').d = 1;
  $('Raccoon4*3:angle.joints').d = [0,0,-90,0];
  $('Raccoon4*4:end_effector.control').d = 1;
  $('Raccoon4*4:angle.joints').d = [0,0,-90,0];
  await $('Raccoon4*4:angle.!joints').w();
  $('Raccoon4*0:end_effector.control').d = 0;
  $('Raccoon4*0:angle.joints').d = [0,-40,-105,60];
  $('Raccoon4*1:end_effector.control').d = 0;
  $('Raccoon4*1:angle.joints').d = [0,-40,-105,60];
  $('Raccoon4*2:end_effector.control').d = 0;
  $('Raccoon4*2:angle.joints').d = [0,-40,-105,60];
  $('Raccoon4*3:end_effector.control').d = 0;
  $('Raccoon4*3:angle.joints').d = [0,-40,-105,60];
  $('Raccoon4*4:end_effector.control').d = 0;
  $('Raccoon4*4:angle.joints').d = [0,-40,-105,60];
  await $('Raccoon4*4:angle.!joints').w();
  $('Raccoon4*0:sound.clip').d = 1;
  $('Raccoon4*1:sound.clip').d = 1;
  $('Raccoon4*2:sound.clip').d = 1;
  $('Raccoon4*3:sound.clip').d = 1;
  $('Raccoon4*4:sound.clip').d = 1;
  await $('Raccoon4*4:sound.!clip').w();
}

// 이 함수를 설명하세요...
async function ACT_4() {
  $('Raccoon4*0:end_effector.control').d = 1;
  $('Raccoon4*0:angle.joints').d = [55,0,-90,0];
  $('Raccoon4*1:end_effector.control').d = 1;
  $('Raccoon4*1:angle.joints').d = [55,0,-90,0];
  $('Raccoon4*2:end_effector.control').d = 1;
  $('Raccoon4*2:angle.joints').d = [55,0,-90,0];
  $('Raccoon4*3:end_effector.control').d = 1;
  $('Raccoon4*3:angle.joints').d = [55,0,-90,0];
  $('Raccoon4*4:end_effector.control').d = 1;
  $('Raccoon4*4:angle.joints').d = [55,0,-90,0];
  await $('Raccoon4*4:angle.!joints').w();
  $('Raccoon4*0:end_effector.control').d = 0;
  $('Raccoon4*0:angle.joints').d = [0,-40,-105,60];
  $('Raccoon4*1:end_effector.control').d = 0;
  $('Raccoon4*1:angle.joints').d = [0,-40,-105,60];
  $('Raccoon4*2:end_effector.control').d = 0;
  $('Raccoon4*2:angle.joints').d = [0,-40,-105,60];
  $('Raccoon4*3:end_effector.control').d = 0;
  $('Raccoon4*3:angle.joints').d = [0,-40,-105,60];
  $('Raccoon4*4:end_effector.control').d = 0;
  $('Raccoon4*4:angle.joints').d = [0,-40,-105,60];
  await $('Raccoon4*4:angle.!joints').w();
  $('Raccoon4*0:end_effector.control').d = 1;
  $('Raccoon4*0:angle.joints').d = [-55,0,-90,0];
  $('Raccoon4*1:end_effector.control').d = 1;
  $('Raccoon4*1:angle.joints').d = [-55,0,-90,0];
  $('Raccoon4*2:end_effector.control').d = 1;
  $('Raccoon4*2:angle.joints').d = [-55,0,-90,0];
  $('Raccoon4*3:end_effector.control').d = 1;
  $('Raccoon4*3:angle.joints').d = [-55,0,-90,0];
  $('Raccoon4*4:end_effector.control').d = 1;
  $('Raccoon4*4:angle.joints').d = [-55,0,-90,0];
  await $('Raccoon4*4:angle.!joints').w();
  $('Raccoon4*0:end_effector.control').d = 0;
  $('Raccoon4*0:angle.joints').d = [0,-40,-105,60];
  $('Raccoon4*1:end_effector.control').d = 0;
  $('Raccoon4*1:angle.joints').d = [0,-40,-105,60];
  $('Raccoon4*2:end_effector.control').d = 0;
  $('Raccoon4*2:angle.joints').d = [0,-40,-105,60];
  $('Raccoon4*3:end_effector.control').d = 0;
  $('Raccoon4*3:angle.joints').d = [0,-40,-105,60];
  $('Raccoon4*4:end_effector.control').d = 0;
  $('Raccoon4*4:angle.joints').d = [0,-40,-105,60];
  await $('Raccoon4*4:angle.!joints').w();
}

// 이 함수를 설명하세요...
async function ACT_5() {
  $('Raccoon4*0:angle.joints').d = [0,0,-135,-45];
  $('Raccoon4*1:angle.joints').d = [0,0,-135,-45];
  $('Raccoon4*2:angle.joints').d = [0,0,-135,-45];
  $('Raccoon4*3:angle.joints').d = [0,0,-135,-45];
  $('Raccoon4*4:angle.joints').d = [0,0,-135,-45];
  await $('Raccoon4*4:angle.!joints').w();
  $('Raccoon4*0:end_effector.control').d = 1;
  $('Raccoon4*1:end_effector.control').d = 1;
  $('Raccoon4*2:end_effector.control').d = 1;
  $('Raccoon4*3:end_effector.control').d = 1;
  $('Raccoon4*4:end_effector.control').d = 1;
  $('Raccoon4*4:angle.joints').d = [0,0,-135,-45];
  await $('Raccoon4*4:angle.!joints').w();
  $('Raccoon4*0:angle.joints').d = [0,0,-90,0];
  $('Raccoon4*1:angle.joints').d = [0,0,-90,0];
  $('Raccoon4*2:angle.joints').d = [0,0,-90,0];
  $('Raccoon4*3:angle.joints').d = [0,0,-90,0];
  $('Raccoon4*4:angle.joints').d = [0,0,-90,0];
  await $('Raccoon4*4:angle.!joints').w();
  $('Raccoon4*0:end_effector.control').d = 0;
  $('Raccoon4*1:end_effector.control').d = 0;
  $('Raccoon4*2:end_effector.control').d = 0;
  $('Raccoon4*3:end_effector.control').d = 0;
  $('Raccoon4*4:end_effector.control').d = 0;
  $('Raccoon4*4:angle.joints').d = [0,0,-90,0];
  await $('Raccoon4*4:angle.!joints').w();
}

// 이 함수를 설명하세요...
async function Finsh() {
  $('Raccoon4*0:angle.joints').d = [-40,-40,-105,60];
  $('Raccoon4*1:angle.joints').d = [-40,-40,-105,60];
  $('Raccoon4*2:angle.joints').d = [-40,-40,-105,60];
  $('Raccoon4*3:angle.joints').d = [-40,-40,-105,60];
  $('Raccoon4*4:angle.joints').d = [-40,-40,-105,60];
  await $('Raccoon4*4:angle.!joints').w();
  $('Raccoon4*0:angle.joints').d = [40,-40,-105,60];
  $('Raccoon4*1:angle.joints').d = [40,-40,-105,60];
  $('Raccoon4*2:angle.joints').d = [40,-40,-105,60];
  $('Raccoon4*3:angle.joints').d = [40,-40,-105,60];
  $('Raccoon4*4:angle.joints').d = [40,-40,-105,60];
  await $('Raccoon4*4:angle.!joints').w();
  $('Raccoon4*1:angle.joints').d = [-15,-40,-105,60];
  $('Raccoon4*2:angle.joints').d = [0,-40,-105,60];
  $('Raccoon4*3:angle.joints').d = [15,-40,-105,60];
  $('Raccoon4*4:angle.joints').d = [30,-40,-105,60];
  $('Raccoon4*0:angle.joints').d = [-30,-40,-105,60];
  await $('Raccoon4*0:angle.!joints').w();
  $('Raccoon4*0:end_effector.control').d = 1;
  $('Raccoon4*1:end_effector.control').d = 1;
  $('Raccoon4*2:end_effector.control').d = 1;
  $('Raccoon4*3:end_effector.control').d = 1;
  $('Raccoon4*4:end_effector.control').d = 1;
  $('Raccoon4*0:angle.joints').d = [-30,-40,-105,60];
  $('Raccoon4*1:angle.joints').d = [-15,-40,-105,60];
  $('Raccoon4*2:angle.joints').d = [0,-40,-105,60];
  $('Raccoon4*3:angle.joints').d = [15,-40,-105,60];
  $('Raccoon4*4:angle.joints').d = [30,-40,-105,60];
  await $('Raccoon4*4:angle.!joints').w();
  $('Raccoon4*0:end_effector.control').d = 0;
  $('Raccoon4*1:end_effector.control').d = 0;
  $('Raccoon4*2:end_effector.control').d = 0;
  $('Raccoon4*3:end_effector.control').d = 0;
  $('Raccoon4*4:end_effector.control').d = 0;
  $('Raccoon4*0:motor_off.joint_1').d = 1;  // 끄기
  $('Raccoon4*0:motor_off.joint_2').d = 1;  // 끄기
  $('Raccoon4*0:motor_off.joint_3').d = 1;  // 끄기
  $('Raccoon4*0:motor_off.joint_4').d = 1;  // 끄기
  $('Raccoon4*1:motor_off.joint_1').d = 1;  // 끄기
  $('Raccoon4*1:motor_off.joint_2').d = 1;  // 끄기
  $('Raccoon4*1:motor_off.joint_3').d = 1;  // 끄기
  $('Raccoon4*1:motor_off.joint_4').d = 1;  // 끄기
  $('Raccoon4*2:motor_off.joint_1').d = 1;  // 끄기
  $('Raccoon4*2:motor_off.joint_2').d = 1;  // 끄기
  $('Raccoon4*2:motor_off.joint_3').d = 1;  // 끄기
  $('Raccoon4*2:motor_off.joint_4').d = 1;  // 끄기
  $('Raccoon4*3:motor_off.joint_1').d = 1;  // 끄기
  $('Raccoon4*3:motor_off.joint_2').d = 1;  // 끄기
  $('Raccoon4*3:motor_off.joint_3').d = 1;  // 끄기
  $('Raccoon4*3:motor_off.joint_4').d = 1;  // 끄기
  $('Raccoon4*4:motor_off.joint_1').d = 1;  // 끄기
  $('Raccoon4*4:motor_off.joint_2').d = 1;  // 끄기
  $('Raccoon4*4:motor_off.joint_3').d = 1;  // 끄기
  $('Raccoon4*4:motor_off.joint_4').d = 1;  // 끄기
  await __wait(20000);
  $('Raccoon4*0:motor_off.joint_1').d = 0;  // 켜기
  $('Raccoon4*0:motor_off.joint_2').d = 0;  // 켜기
  $('Raccoon4*0:motor_off.joint_3').d = 0;  // 켜기
  $('Raccoon4*0:motor_off.joint_4').d = 0;  // 켜기
  $('Raccoon4*1:motor_off.joint_1').d = 0;  // 켜기
  $('Raccoon4*1:motor_off.joint_2').d = 0;  // 켜기
  $('Raccoon4*1:motor_off.joint_3').d = 0;  // 켜기
  $('Raccoon4*1:motor_off.joint_4').d = 0;  // 켜기
  $('Raccoon4*2:motor_off.joint_1').d = 0;  // 켜기
  $('Raccoon4*2:motor_off.joint_2').d = 0;  // 켜기
  $('Raccoon4*2:motor_off.joint_3').d = 0;  // 켜기
  $('Raccoon4*2:motor_off.joint_4').d = 0;  // 켜기
  $('Raccoon4*3:motor_off.joint_1').d = 0;  // 켜기
  $('Raccoon4*3:motor_off.joint_2').d = 0;  // 켜기
  $('Raccoon4*3:motor_off.joint_3').d = 0;  // 켜기
  $('Raccoon4*3:motor_off.joint_4').d = 0;  // 켜기
  $('Raccoon4*4:motor_off.joint_1').d = 0;  // 켜기
  $('Raccoon4*4:motor_off.joint_2').d = 0;  // 켜기
  $('Raccoon4*4:motor_off.joint_3').d = 0;  // 켜기
  $('Raccoon4*4:motor_off.joint_4').d = 0;  // 켜기
}

// 이 함수를 설명하세요...
function init_list2() {
  // 동작 중에 배열 실시간으로 할당
  array = [joint1, joint2, joint3, joint4];
}

// 이 함수를 설명하세요...
async function Small_Wave1() {
  set = 3;
  flag = 0;
  $('Raccoon4*0:angle.joints').d = [0,-50,-90,60];
  await $('Raccoon4*0:angle.!joints').w();
  Init_loop_var();
}

// 이 함수를 설명하세요...
async function Small_Wave2() {
  set = 4;
  flag = 0;
  $('Raccoon4*0:angle.joints').d = [0,0,-90,0];
  await $('Raccoon4*0:angle.!joints').w();
  Init_loop_var();
}

// 이 함수를 설명하세요...
async function Wave_A() {
  count = 1;
  await Init_Wave_A();
  await Increase_A();
  await Decrease_A();
  Grab_or_NoGrab = (typeof Grab_or_NoGrab === 'number' ? Grab_or_NoGrab : 0) + 1;
}

// 이 함수를 설명하세요...
async function Increase_A() {
  // Wave_A 하위 동작 함수
  set = 1;
  for (var count6 = 0; count6 < 5; count6++) {
    flag = 0;
    joint2 = (typeof joint2 === 'number' ? joint2 : 0) + 5;
    joint3 = (typeof joint3 === 'number' ? joint3 : 0) + 15;
    if (count == 5) {
      init_list2();
      if (Grab_or_NoGrab % 2 === 1) {
        $('Raccoon4*4:end_effector.control').d = 1;
      }
      $('Raccoon4*4:angle.joints').d = array;
      await $('Raccoon4*4:angle.!joints').w();
      Init_loop_var();
    } else {
      init_list2();
      $('Raccoon4*4:angle.joints').d = prev_ary1;
      await $('Raccoon4*4:angle.!joints').w();
      Init_loop_var();
    }
    count = (typeof count === 'number' ? count : 0) + 1;
  }
}

// 이 함수를 설명하세요...
async function Decrease_A() {
  // Wave_A 하위 동작 함수
  set = 2;
  joint2 = -50;
  joint3 = -95;
  for (var count7 = 0; count7 < 5; count7++) {
    flag = 0;
    joint2 = (typeof joint2 === 'number' ? joint2 : 0) + 5;
    joint3 = (typeof joint3 === 'number' ? joint3 : 0) + 10;
    if (count == 2) {
      init_list2();
      $('Raccoon4*0:end_effector.control').d = 0;
      $('Raccoon4*0:angle.joints').d = array;
      await $('Raccoon4*0:angle.!joints').w();
      Init_loop_var();
    } else {
      init_list2();
      $('Raccoon4*0:angle.joints').d = prev_ary2;
      await $('Raccoon4*0:angle.!joints').w();
      Init_loop_var();
    }
    count = (typeof count === 'number' ? count : 0) + -1;
  }
}

// 이 함수를 설명하세요...
async function Init_Wave_A() {
  // Wave_A 초기 동작
  set = 0;
  flag = 0;
  joint1 = 0;
  joint2 = -50;
  joint3 = -95;
  joint4 = 60;
  init_list2();
  $('Raccoon4*0:angle.joints').d = array;
  await $('Raccoon4*0:angle.!joints').w();
  Init_loop_var();
}


// put setup code here, to run once:
async function setup() {
  Grab_or_NoGrab = 0;
  init_set();
  Init_loop_var();
  while(true) {
    await ACT_1();
    await ACT_2();
    await ACT_3();
    await ACT_4();
    for (var count2 = 0; count2 < 2; count2++) {
      await Small_Wave1();
      await Small_Wave2();
    }
    await Wave_A();
    await Wave_A();
    await Zero();
    await Home();
    for (var count3 = 0; count3 < 2; count3++) {
      await ACT_5();
    }
    await Finsh();
    await __wait(10);
  }
}

// put control code here, to run repeatedly:
function loop() {
  func();
}

// @예제

// 1.  예제 설명
// 라쿤 5대가 같이 움직이는 예제입니다.

// 라쿤 배치 시
// 라쿤0 - 라쿤 1 - 라쿤2 - 라쿤3 - 라쿤4 와 같이 배치해주면 됩니다.

// 2. 함수 설명

// >> 시작하기 & 무한반복하기에서 같이 동작하는 함수

// init_set() :
//         라쿤0 ~ 라쿤4에 대해서, 각도 제어모드로 설정 및
//         관절 각도 제어  속도를 설정합니다.

// init_list1() :
//         Init_Wave() 에서 사용되는 함수로, 시작하기와 무한 반복하기에서
//          공유되는 배열인 array 을 초기화합니다.

// init_list2() :
//         Init_Wave() 에서 사용되는 함수로, array에 대해서 설정할 배열
//          값을 반영해주는 함수입니다.

// Init_loop_var() :
//         무한 반복하기에서는 10ms 단위로 움직이기 때문에 각도 설정 시
//          모든 움직임을 따라가려 합니다. 따라서 무한반복하기에서 동작 시
//           원하는 동작을 위한 flag 설정 함수입니다.

// Small Wave1() :
//         시작하기 & 무한 반복하기에서 라쿤0 ~ 라쿤4 동작을 수행하는 함수

// Small_Wave2() :
//          시작하기 & 무한 반복하기에서 라쿤0 ~ 라쿤4 동작을 수행하는 함수

// Wave_A() :
//           Init_Wave_A() :  Wave_A의 첫 번째 동작
//           Increase_A() :  Wave_A의 두 번째 동작
//           Decrease_A() : Wave_A의 세 번째 동작

// func() :
//          무한 반복하기에서 동작하는 함수입니다.

// >> 시작하기에서 단독으로 동작하는 함수

// five() :
//        ACT_2() 함수에서 라쿤 0 ~4 에 대해 공유되는 배열을 설정하는 함수

// release() :
//        라쿤 0~ 4 그리퍼 풀기

// Home() :
//         라쿤 0 ~4 home 상태로 되돌리기

// Zero() :
//          라쿤 0 ~4 zero 상태로 되돌리기

// ACT_1() :  라쿤 0~4 를 동작시키는 함수

// ACT_2() : 라쿤 0~4 를 동작시키는 함수

// ACT_3() : 라쿤 0~4 를 동작시키는 함수

// ACT_4() : 라쿤 0~4 를 동작시키는 함수

// ACT_5() : 라쿤 0~4 를 동작시키는 함수

// Finsh() : 마지막 동작을 수행하며, 끝났음을 알리는 함수 , 또한 전시회에서
//                원활환 동작을 위해, 20초 기다리기를 넣어놓음.
