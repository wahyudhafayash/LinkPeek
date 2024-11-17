import axios from "axios";
import * as cheerio from "cheerio";
import { object, string } from "yup";

const schema = object({
  url: string().url().required(),
});

const getUrlPreview = async (req, res) => {
  try {
    const value = await schema.validate(req.body);

    const { data } = await axios.get(value.url);
    const $ = cheerio.load(data);

    const title =
      $('meta[property="og:title"]').attr("content") || $("title").text();
    const description =
      $('meta[property="og:description"]').attr("content") ||
      $("meta[name='description']").attr("content") ||
      $("title").text();
    const image =
      $('meta[property="og:image"]').attr("content") ||
      $("img").first().attr("src");

    const previewData = {
      title: title || "No title available",
      description: description || "No description available",
      image: image || "No image available",
    };

    return res.status(200).json(previewData);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to generate preview" });
  }
};

export { getUrlPreview };
