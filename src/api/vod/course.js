import request from '@/utils/request'

const api_name = '/admin/vod/course'

export default {
  /**
   * 课程列表
   * @param page 页码
   * @param limit 每页大小
   * @param courseVo 查询条件
   */
  getPageList(page, limit, courseVo) {
    return request({
      url: `${api_name}/${page}/${limit}`,
      method: 'get',
      params: courseVo
    })
  },
  /**
   * 添加课程信息
   * @param courseInfo
   */
  saveCourseInfo(courseInfo) {
    return request({
      url: `${api_name}/save`,
      method: 'post',
      data: courseInfo
    })
  },
  /**
   * 根据id查询课程基本信息和描述信息
   * @param id
   */
  getCourseInfoById(id) {
    return request({
      url: `${api_name}/getCourseInfo/${id}`,
      method: 'get'
    })
  },
  /**
   * 修改课程基本信息和详细信息
   * @param courseInfo
   */
  updateCourseInfoById(courseInfo) {
    return request({
      url: `${api_name}/update`,
      method: 'put',
      data: courseInfo
    })
  }
}
