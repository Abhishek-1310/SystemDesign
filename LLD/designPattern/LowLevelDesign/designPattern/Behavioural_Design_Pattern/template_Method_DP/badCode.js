// we have different parser 3 parse all follow same step execpt how to parse data 

class CsvParser {

    parse() {
        console.log('open file');
        console.log('parsing file using csv...');
        console.log('close file');
    }

}

class XmlParser {
    parse() {
        console.log('open file');
        console.log('parsing file using xml...');
        console.log('close file');
    }
}

class JsonParser {
    parse() {
        console.log('open file');
        console.log('parsing file using json...');
        console.log('close file');
    }
}

let csv = new CsvParser();
let xml = new XmlParser();
let json = new JsonParser();

csv.parse();
xml.parse();
json.parse();

// problem is code dupliaction most of the code is reapeting
// now tomorrow need to add new feature auth every file class you need to change

// template method said all common code step put into one parent class only keep different step in child class.