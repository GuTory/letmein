package com.letmein.service

import org.springframework.stereotype.Service
import java.io.ByteArrayInputStream
import java.io.File
import javax.imageio.ImageIO
import javax.xml.bind.DatatypeConverter

@Service
class ImageService {

    private val dir = "C:\\egyetem\\aktualis_targyak\\onlab\\letmein\\backend\\src\\main\\resources\\static\\images"

    fun saveImage(data: String, name: String): String {
        val format = data.split(";")[0].split("/")[1]
        val base64Image = data.split(",")[1]
        val imageBytes: ByteArray = DatatypeConverter.parseBase64Binary(base64Image)
        val img = ImageIO.read(ByteArrayInputStream(imageBytes))
        val fullname = "$dir\\$name.$format"
        ImageIO.write(img, "jpg", File(fullname))
        return fullname
    }

    fun deleteImage(name: String){
        if (name != "")
            name.let {
                File(it).delete()
            }
    }
}