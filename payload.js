// Import the faker library
import faker from 'https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js';

// Create a function that generates random user data using the faker library

export const userDataPayload = () => ({
	"username": faker.internet.email(),
	"name": faker.name.firstName(),
	"otpToken": "lms_auth#devenvotptoken",
	"password": "123456",
	"type": "email"
});

export const orderPayload1 = () => ({
	"items": [
	  {
		"platform": "skills",
		"slug": "microsoft-word-course",
		"catalog_product_id": 210,
		"content_id": 76,
		"catalog_sku_id": 210,
		"actual_price": 950,
		"default_discount": 0,
		"promo_code": null,
		"promo_discount": null,
		"vat": 0,
		"final_price": 950
	  }
	],
	"sub_total": 950,
	"promo_code": null,
	"total_promo_discount": null,
	"total_default_discount": 0,
	"order_total_price": 950,
	"sales_attribution": {
	  "meta_attribute": {
		"platform": "WEB"
	  }
	},
	"campaign_id": null,
	"utm_params": {},
	"total_vat": 0,
	"cart_id": "64185204cb355140102d0356"
  }
);

export const orderPayload = () => ({
	"items": [
	  {
		"platform": "k12",
		"slug": "ob23-class-10",
		"catalog_product_id": "10091",
		"content_id": 142,
		"catalog_sku_id": "249949",
		"actual_price": 200,
		"default_discount": 0,
		"promo_code": null,
		"promo_discount": null,
		"vat": 0,
		"final_price": 200
	  }
	],
	"sub_total": 200,
	"promo_code": null,
	"total_promo_discount": null,
	"total_default_discount": 0,
	"order_total_price": 200,
	"sales_attribution": {
	  "meta_attribute": {
		"platform": "WEB"
	  }
	},
	"campaign_id": null,
	"utm_params": {},
	"total_vat": 0,
	"cart_id": "",
	"address": null
  }
)

export const sessions = () => ({
	"liveclass_id": "85Mwy1qSdF",
	"platform": "k12",
	"program_id": "142",
	"course_id": "272"
});


export const commentPayload = () => ({
	"type": "comment",
	"sender_type": "student",
	"body": faker.lorem.sentence(),
	"attachments": [],
	"sender_id": 2148,
	"live_class_id": "HIzbaKFOYf",
	"publish_channel_name": "stage_message.HIzbaKFOYf"
});

export const conversationPayload = () => ({
	// "name": "১০ম শ্রেণি [SSC 2024] অনলাইন ব্যাচ - বিজ্ঞান বিভাগ",
	"thread": {
	  "id": 59,
	  "identification_type": "course",
	  "identification_id": "272",
	  "parent": {
		"identification_type": "program",
		"identification_id": "142"
	  }
	},
	// "thumbnail": "string",
	// "type": "one_to_one"
  }
);