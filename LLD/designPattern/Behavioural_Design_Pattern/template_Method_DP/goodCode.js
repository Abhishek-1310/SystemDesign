// make one abstract class then template method then concreate class.

class DataParser {
    parse() {
        this.openFile();
        this.parsing();
        this.closeFile();
    }
    openFile() {
        console.log('open file..');
    }
    parsing() {
        throw new Error('implement this method in child class');
    }
    closeFile() {
        console.log('close file..');
    }
}

class CsvParser extends DataParser {
    parsing() {
        console.log('parsing the file using csv...');
    }
}

class JsonParser extends DataParser {
    parsing() {
        console.log('parsing the file using json...');
    }
}

class XmlParser extends DataParser {
    parsing() {
        console.log('parsing the file using Xml...');
    }
}

let csv = new CsvParser();
let json = new JsonParser();
let xml = new XmlParser();

csv.parse();
json.parse();
xml.parse();