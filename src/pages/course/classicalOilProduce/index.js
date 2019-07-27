import React, { Component } from 'react';
import AniBackground from '../../../components/AniBackground';
import Bar from '../../../components/Bar';
import Material from '../../../components/Material';
import StudentsWork from '../../../components/StudentsWork';
import IntroSection from '../components/IntroSection';
import UsSection from '../components/UsSection';
import CourseSchedule from '../components/CourseSchedule';
import Background from '../components/Background';
import {
  courseBg,
  courseBgText,
  courseMaterialList,
  courseIntroPicture,
  courseUsPicture,
  courseUsTextPicture,
  courseScheduleList,
  coursePhoto
} from '../../../service/ossURL';
import { courseIntroText, courseChineseName } from '../../../service/text';
import { getStudentWorkList } from '../../../service/courseSvc';
import './style.scss';

export default class ClassicalOilProduce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentWorkList: []
    };
  }
  componentDidMount() {
    Promise.all([getStudentWorkList()]).then(values => {
      const studentWorkList = values[0];
      this.setState({
        studentWorkList
      });
    });
  }
  render() {
    const courseName = 'classicalOilProduce';
    const { studentWorkList } = this.state;
    return (
      <div className="body">
        <AniBackground
          bg_url={courseBg[courseName]}
          text_url={courseBgText[courseName]}
        />
        <div className="ry-split">— 课程详情 —</div>
        <IntroSection
          url={courseIntroPicture[courseName]}
          title={courseChineseName[courseName]}
          content={courseIntroText[courseName]}
        />
        <UsSection
          url={courseUsPicture[courseName]}
          textPicture={courseUsTextPicture[courseName]}
        />
        <Material materialList={courseMaterialList[courseName]} />
        <StudentsWork studentWorkList={studentWorkList} />
        <CourseSchedule list={courseScheduleList[courseName]} />
        <Background imageUrl={coursePhoto[courseName]} />
        <Bar />
      </div>
    );
  }
}
