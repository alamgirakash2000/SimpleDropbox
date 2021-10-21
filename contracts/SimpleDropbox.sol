//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract SimpleDropbox {
    address public owner;
    
    struct File {
        string hash;
        string fileName;
        string fileType;
        uint date;
    }   
    
    mapping(address => File[]) files;
    
    constructor(){
        owner=msg.sender; 
    }
    
    function add(string memory _hash, string memory _fileName, string memory _fileType, uint _date) public {
        require(bytes(_hash).length>0 && bytes(_fileName).length>0  && bytes(_fileType).length>0  && _date !=0 );
        files[msg.sender].push(File(_hash, _fileName, _fileType, _date));
    }
    
    function getFile(uint _index) public view returns(string memory, string memory, string memory, uint) {
        require(_index < files[msg.sender].length);
        File memory searchFile = files[msg.sender][_index];
        return (searchFile.hash, searchFile.fileName, searchFile.fileType, searchFile.date);
    }
    
    function getLength() public view returns (uint){
        return files[msg.sender].length;
    }
}