import request from "@/utils/request";

// 品牌推广详情
export function getBrandPromotionInfo(data) {
  return request({
    url: `/brandPromotion/getBrandPromotionInfo`,
    method: "post",
    data,
    hideMessage: true,
  });
}
